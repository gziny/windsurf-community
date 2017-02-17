export const GET_REPORTS_REQUEST_STARTED = `${'data'}/GET_REPORTS_REQUEST_STARTED`;
export const GET_REPORTS_REQUEST_SUCCEEDED = `${'data'}/GET_REPORTS_REQUEST_SUCCEEDED`;

export const GET_USERS_REQUEST_STARTED = `${'data'}/GET_USERS_REQUEST_STARTED`;
export const GET_USERS_REQUEST_SUCCEEDED = `${'data'}/GET_USERS_REQUEST_SUCCEEDED`;

export const GET_USER_REQUEST_STARTED = `${'data'}/GET_SITE_REQUEST_STARTED`;
export const GET_USER_REQUEST_SUCCEEDED = `${'data'}/GET_SITE_REQUEST_SUCCEEDED`;

export const GET_REPORT_REQUEST_STARTED = `${'data'}/GET_REPORT_REQUEST_STARTED`;
export const GET_REPORT_REQUEST_SUCCEEDED = `${'data'}/GET_REPORT_REQUEST_SUCCEEDED`;

export const INITIALIZED = `${'data'}/INITIALIZED`;

export const NEW_USER_CHANGED = `${'data'}/NEW_USER_CHANGED`;
export const USER_CHANGED = `${'data'}/USER_CHANGED`;
export const DATE_REPORTED_CHANGED = `${'data'}/DATE_REPORTED_CHANGED`;
export const WIND_DIRECTION_CHANGED = `${'data'}/WIND_DIRECTION_CHANGED`;
export const WIND_SPEED_CHANGED = `${'data'}/WIND_SPEED_CHANGED`;
export const SWELL_SIZE_CHANGED = `${'data'}/SWELL_SIZE_CHANGED`;
export const SATISFACTION_CHANGED = `${'data'}/SATISFACTION_CHANGED`;
export const FREETEXT_CHANGED = `${'data'}/FREETEXT_CHANGED`;
export const SPOT_CHANGED = `${'data'}/SPOT_CHANGED`;

export const GET_INIT_USERS_REQUEST_SUCCEEDED = `${'data'}/GET_INIT_USERS_REQUEST_SUCCEEDED`;
export const GET_INIT_REPORTS_REQUEST_SUCCEEDED = `${'data'}/GET_INIT_REPORTS_REQUEST_SUCCEEDED`;

export const getUsersRequestStarted = () => ({
  type: GET_USERS_REQUEST_STARTED,
});

export const getUsersRequestSucceeded = users => ({
  type: GET_USERS_REQUEST_SUCCEEDED,
  payload: users,
});

export const getUserRequestStarted = user => ({
  type: GET_USER_REQUEST_STARTED,
  user,
});

export const getUserRequestSucceeded = user => ({
  type: GET_USER_REQUEST_SUCCEEDED,
  payload: user,
});

export const getReportsRequestStarted = () => ({
  type: GET_REPORTS_REQUEST_STARTED,
});

export const getReportsRequestSucceeded = reports => ({
  type: GET_REPORTS_REQUEST_SUCCEEDED,
  payload: reports,
});

export const getReportRequestStarted = reportId => ({
  type: GET_REPORT_REQUEST_STARTED,
  reportId,
});

export const getReportRequestSucceeded = report => ({
  type: GET_REPORT_REQUEST_SUCCEEDED,
  payload: report,
});

export const initialized = () => ({
  type: INITIALIZED,
});

export const getInitUsersRequestSucceeded = users => ({
  type: GET_INIT_USERS_REQUEST_SUCCEEDED,
  payload: users,
});

export const getInitReportsRequestSucceeded = reports => ({
  type: GET_INIT_REPORTS_REQUEST_SUCCEEDED,
  payload: reports,
});

export const newUserChanged = event => ({
  type: NEW_USER_CHANGED,
  payload: event.target.value,
});

export const userChanged = event => ({
  type: USER_CHANGED,
  payload: event.target.value,
});

export const dateReportedChanged = event => ({
  type: DATE_REPORTED_CHANGED,
  payload: event.target.value,
});

export const spotChanged = event => ({
  type: SPOT_CHANGED,
  payload: event.target.value,
});

export const windDirectionChanged = event => ({
  type: WIND_DIRECTION_CHANGED,
  payload: Number(event.target.id),
});

export const windSpeedChanged = event => ({
  type: WIND_SPEED_CHANGED,
  payload: Number(event.target.id),
});

export const swellSizeChanged = event => ({
  type: SWELL_SIZE_CHANGED,
  payload: Number(event.target.id),
});

export const satisfactionChanged = event => ({
  type: SATISFACTION_CHANGED,
  payload: Number(event.target.id),
});

export const freeTextChanged = event => ({
  type: FREETEXT_CHANGED,
  payload: event.target.value,
});
