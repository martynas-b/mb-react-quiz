import React from 'react';
import { Route } from 'react-router';

import PageCont from '../global/pageCont';
import BrowsePageContainer from '../browse/browsePageContainer';
import ItemPageContainer from '../item/itemPageContainer';

const routes = () => {
	return (
		<Route component={PageCont}>
			<Route name="browsePage" path="/" component={BrowsePageContainer} />
			<Route name="itemPage" path="item/:id" component={ItemPageContainer} />
		</Route>
	);
};

export default routes;