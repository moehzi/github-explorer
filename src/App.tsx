import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IntlProvider } from './providers/IntlProvider';
import MainLayout from './layout/MainLayout';

export default function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<IntlProvider>
				<MainLayout>
					<RouterProvider router={router} />
				</MainLayout>
			</IntlProvider>
		</QueryClientProvider>
	);
}
