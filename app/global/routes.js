import browseRoutes from '../browse/browseRoutes';
import itemRoutes from '../item/itemRoutes';
import PageCont from './pageCont';

const routes = {
	component: PageCont,
	childRoutes: [
        browseRoutes,
        itemRoutes
	]
}

export default routes;