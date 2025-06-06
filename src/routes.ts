import { createBrowserRouter } from 'react-router';
import pages from './pages';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: pages.Home,
	},
	{
		path: '/:username',
		Component: pages.DetailUser,
	},
]);
