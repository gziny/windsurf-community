
import { connect } from 'react-redux';
import { Gallery } from './gallery';
import * as selectors from '../../../data/selectors';

export const GalleryContainer = connect(state => ({
  user: selectors.getUser(state),
}), {
})(Gallery);
