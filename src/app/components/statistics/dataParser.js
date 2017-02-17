import * as Lists from '../../../data/lists';

// Reports Per User Per Month
const ReportsCountPerUserPerMonth = (previousValue, currentValue) => {
  const reportsCountPerUserPerMonth = previousValue;
  const month = new Date(currentValue.Date).getMonth();

  reportsCountPerUserPerMonth[month] += 1;

  return reportsCountPerUserPerMonth;
};

export const getReportsMonths = () => {
  const reportMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return reportMonths;
};

export const getReportsCountPerUserPerMonth = (user, reports) => {
  // const reportsCount = [65, 59, 80, 81, 56, 55, 40];
  const months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const reportsPerUser = reports.filter(e => user === e.User);
  const reportsCount = reportsPerUser.reduce(ReportsCountPerUserPerMonth, months);

  return reportsCount;
};

export const getTotalReportsCountPerMonth = (reports) => {
  // const reportsCount = [65, 59, 80, 81, 56, 55, 40];
  const months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const reportsCount = reports.reduce(ReportsCountPerUserPerMonth, months);

  return reportsCount;
};

// Reports Per User Per Spot

const ReportsCountPerUserPerSpot = (previousValue, currentValue) => {
  const reportsCountPerUserPerSpot = previousValue;
  const spot = currentValue.Spot;

  reportsCountPerUserPerSpot[Lists.Spots.findIndex(e => spot === e.value) - 1] += 1;

  return reportsCountPerUserPerSpot;
};

export const getReportsSpots = () => {
  const reportSpots = ['KI', 'KN', 'BG', 'HA', 'HJ', 'SB', 'TL', 'AA', 'EL'];
  return reportSpots;
};

export const getReportsCountPerUserPerSpot = (user, reports) => {
  // const reportsCount = [15, 7];
  const spots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const reportsPerUser = reports.filter(e => user === e.User);
  const reportsCount = reportsPerUser.reduce(ReportsCountPerUserPerSpot, spots);

  return reportsCount;
};


export const getTotalReportsCountPerSpot = (reports) => {
  // const reportsCount = [15, 7];
  const spots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const reportsCount = reports.reduce(ReportsCountPerUserPerSpot, spots);

  return reportsCount;
};
