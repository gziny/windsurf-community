import data from '../data';

export default function* saga() {
  yield [
    data.saga(),
  ];
}
