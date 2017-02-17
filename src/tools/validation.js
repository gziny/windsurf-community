import moment from 'moment';

export function DateIsValid(date) {
  return moment(date).isValid();
}
