import { connect } from 'react-redux';

import FavIcon from './favIcon';

import * as favoriteActions from '../actions/favorite';

const FavIconContainer = connect(
	null,
	favoriteActions
)(FavIcon);

export default FavIconContainer;