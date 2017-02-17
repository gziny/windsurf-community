import * as dataParser from './dataParser';

export function ReportsPerMonthAsLine(user, reports) {
  return ({
    labels: dataParser.getReportsMonths(),
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Reports per month',
        fillColor: 'rgba(66, 107, 244, 0.2)',
        data: dataParser.getReportsCountPerUserPerMonth(user, reports),
        // data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });
}

export function TotalReportsPerMonthAsLine(reports) {
  return ({
    labels: dataParser.getReportsMonths(),
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Reports per month',
        fillColor: 'rgba(66, 107, 244, 0.2)',
        data: dataParser.getTotalReportsCountPerMonth(reports),
        // data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });
}

export function ReportsPerSpotAsBar(user, reports) {
  return ({
    labels: dataParser.getReportsSpots(),
    // labels: ['A', 'B'],
    datasets: [
      {
        // data: [65, 59],
        fillColor: [
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
        ],
        // hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        data: dataParser.getReportsCountPerUserPerSpot(user, reports),
      },
    ],
  });
}

export function TotalReportsPerSpotAsBar(reports) {
  return ({
    labels: dataParser.getReportsSpots(),
    // labels: ['A', 'B'],
    datasets: [
      {
        // data: [65, 59],
        fillColor: [
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
          'rgba(66, 244, 216, 0.2)',
        ],
        // hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        data: dataParser.getTotalReportsCountPerSpot(reports),
      },
    ],
  });
}
