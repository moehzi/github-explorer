import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IntlProvider } from './providers/IntlProvider';
import MainLayout from './layout/MainLayout';
import { NuqsAdapter } from 'nuqs/adapters/react';

export default function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				staleTime: 1000 * 60 * 5,
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<IntlProvider>
				<MainLayout>
					<NuqsAdapter>
						<RouterProvider router={router} />
					</NuqsAdapter>
				</MainLayout>
			</IntlProvider>
		</QueryClientProvider>
	);
}
