const get = state => state.data;

export const getReports = state => get(state).reports;
export const getReport = state => get(state).report;
export const getUsers = state => get(state).users;
export const getUser = state => get(state).user;
export const getNewUser = state => get(state).newUser;
export const getDateReported = state => get(state).dateReported;
export const getSatisfaction = state => get(state).satisfaction;
export const getSpot = state => get(state).spot;
export const getSwellSize = state => get(state).swellSize;
export const getWindDirction = state => get(state).windDirection;
export const getWindSpeed = state => get(state).windSpeed;
export const getFreeText = state => get(state).freeText;
