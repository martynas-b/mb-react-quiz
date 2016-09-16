import { connect } from 'react-redux';

import FavIcon from './favIcon';

import * as favoriteActions from './favoriteActions';

const FavIconContainer = connect(
	null,
	favoriteActions
)(FavIcon);

export default FavIconContainer;