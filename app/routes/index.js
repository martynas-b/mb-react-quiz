import React from 'react';
import { Route } from 'react-router';

import PageCont from '../components/pageCont';
import BrowsePage from '../components/browsePage';
import ItemPage from '../components/itemPage';

const routes = () => {
	return (
		<Route component={PageCont}>
			<Route name="browsePage" path="/" component={BrowsePage} />
			<Route name="itemPage" path="item/:id" component={ItemPage} />
		</Route>
	);
};

export default routes;