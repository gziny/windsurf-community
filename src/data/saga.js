// import { takeEvery, takeLatest } from 'redux-saga';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as dataActions from './actions';
import * as actions from '../app/actions';
import * as serverAPI from './serverAPI';
// import * as mockData from './mockData';

export function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}

export function* init() {
  yield call(initUsers);
  yield call(initReports);
}

export function* initUsers() {
  const users = yield call(serverAPI.fetchUsers);
  yield put(dataActions.getInitUsersRequestSucceeded(users));
}

/*
export function* initMockUsers() {
  const users = mockData.mockUsers;
  yield call(delay);
  yield put(dataActions.getInitUsersRequestSucceeded(users));
}
*/

export function* fetchUsers() {
  const users = yield call(serverAPI.fetchUsers);
  yield put(dataActions.getUsersRequestSucceeded(users));
}

export function* fetchUser(user) {
  const res = yield call(serverAPI.fetchUser, user);
  yield put(dataActions.getUserRequestSucceeded([res]));
}

export function* initReports() {
  const reports = yield call(serverAPI.fetchReports);
  yield put(dataActions.getInitReportsRequestSucceeded(reports));
}

export function* fetchReports() {
  const reports = yield call(serverAPI.fetchReports);
  yield put(dataActions.getReportsRequestSucceeded(reports));
}

export function* fetchReport(reportId) {
  const report = yield call(serverAPI.fetchReport, reportId);
  yield put(dataActions.getReportRequestSucceeded([report]));
}

export function* saveReport(action) {
  yield put(actions.reportSavingStarted());
  const report = action.payload;
  const result = yield call(serverAPI.saveReport, report);
  yield put(actions.reportSavingSucceded(result));
  yield call(fetchReports);
}

export function* saveUser(action) {
  yield put(actions.userSavingStarted());
  const user = action.payload;
  const result = yield call(serverAPI.saveUser, user);
  yield put(actions.userSavingSucceded(result));
  yield call(fetchUsers);
  yield put(push('/report'));
}

export default function* saga() {
  yield [
    // takeEvery(dataActions.INITIALIZED, initMockUsers),
    takeEvery(dataActions.INITIALIZED, init),
    takeEvery(actions.SAVE_REPORT, saveReport),
    takeEvery(actions.SAVE_USER, saveUser),
  ];
}
