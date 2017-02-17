export const SAVE_USER = `${'app'}/SAVE_USER`;
export const SAVE_REPORT = `${'app'}/SAVE_REPORT`;
export const REPORT_SAVING_START = `${'app'}/REPORT_SAVING_START`;
export const REPORT_SAVING_SUCCEDED = `${'app'}/REPORT_SAVING_SUCCEDED`;
export const REPORT_SAVING_FAILED = `${'app'}/REPORT_SAVING_FAILED`;
export const USER_SAVING_START = `${'app'}/USER_SAVING_START`;
export const USER_SAVING_SUCCEDED = `${'app'}/USER_SAVING_SUCCEDED`;
export const USER_SAVING_FAILED = `${'app'}/USER_SAVING_FAILED`;

export const saveReport = report => ({
  type: SAVE_REPORT,
  payload: report,
});

export const saveUser = user => ({
  type: SAVE_USER,
  payload: user,
});

export const reportSavingStarted = () => ({
  type: REPORT_SAVING_START,
  payload: true,
});

export const reportSavingSucceded = resolve => ({
  type: REPORT_SAVING_SUCCEDED,
  payload: resolve,
});

export const reportSavingFailed = error => ({
  type: REPORT_SAVING_FAILED,
  payload: error,
});

export const userSavingStarted = () => ({
  type: USER_SAVING_START,
  payload: true,
});

export const userSavingSucceded = resolve => ({
  type: USER_SAVING_SUCCEDED,
  payload: resolve,
});

export const userSavingFailed = error => ({
  type: USER_SAVING_FAILED,
  payload: error,
});
