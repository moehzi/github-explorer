import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
			mutations: {
				retry: false,
			},
		},
	});

interface AllTheProvidersProps {
	children: React.ReactNode;
	queryClient?: QueryClient;
}

const AllTheProviders = ({ children, queryClient }: AllTheProvidersProps) => {
	const testQueryClient = queryClient || createTestQueryClient();

	return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'> & {
		queryClient?: QueryClient;
		wrapper?: React.ComponentType<{ children: React.ReactNode }>;
	}
) => {
	const { queryClient, wrapper: CustomWrapper, ...renderOptions } = options || {};

	const CombinedWrapper = ({ children }: { children: React.ReactNode }) => {
		const content = <AllTheProviders queryClient={queryClient}>{children}</AllTheProviders>;
		return CustomWrapper ? <CustomWrapper>{content}</CustomWrapper> : content;
	};

	return render(ui, {
		wrapper: CombinedWrapper,
		...renderOptions,
	});
};

export * from '@testing-library/react';
export { customRender as render };
export { createTestQueryClient };
