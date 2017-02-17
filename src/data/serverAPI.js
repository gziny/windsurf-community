import fetch from 'isomorphic-fetch';

export function saveUser(user) {
  return new Promise((resolve) => {
    const formData = new FormData();
    formData.append('Name', user.Name);
    fetch('http://localhost:80/WindsurfDB/user', {
    // fetch('http://80.178.72.39:80/WindsurfDB/user', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(result => resolve(result));
  });
}

export function saveReport(report) {
  return new Promise((resolve) => {
    const formData = new FormData();
    formData.append('User', report.User);
    formData.append('Date', report.DateReported);
    formData.append('Spot', report.Spot);
    formData.append('WindSpeed', report.WindSpeed);
    formData.append('WindDirection', report.WindDirection);
    formData.append('SwellSize', report.SwellSize);
    formData.append('Satisfaction', report.Satisfaction);
    formData.append('FreeText', report.FreeText);

    fetch('http://localhost:80/WindsurfDB/report', {
    // fetch('http://80.178.72.39:80/WindsurfDB/report', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(result => resolve(result));
  });
}


export function fetchReports() {
  return new Promise((resolve) => {
    fetch('http://localhost:80/WindsurfDB/reports')
    // fetch('http://80.178.72.39:80/WindsurfDB/reports')
    .then(response => response.json())
    .then(Reports => resolve(Reports));
  });
}

export function fetchReport(reportId) {
  return new Promise((resolve) => {
    fetch(`http://localhost:80/WindsurfDB/reports('${reportId}')`)
    // fetch(`http://80.178.72.39:80/WindsurfDB/reports('${reportId}')`)
    .then(response => response.json())
    .then(Report => resolve(Report));
  });
}

export function fetchUsers() {
  return new Promise((resolve) => {
    fetch('http://localhost:80/WindsurfDB/users')
    // fetch('http://80.178.72.39:80/WindsurfDB/users')
    .then(response => response.json())
    .then(Users => resolve(Users));
  });
}

export function fetchUser(user) {
  return new Promise((resolve) => {
    fetch(`http://localhost:80/WindsurfDB/users('${user}')`)
    // fetch(`http://80.178.72.39:80/WindsurfDB/users('${user}')`)
    .then(response => response.json())
    .then(User => resolve(User));
  });
}
