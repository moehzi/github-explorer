import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../../test/utils';
import Banner from '../Banner';
import { HomeContext } from '@/contexts/HomeContext';
import type { ReactNode } from 'react';

vi.mock('../ImageSearch/ImageSearch', () => ({
	default: () => <div data-testid="image-search">ImageSearch</div>,
}));

vi.mock('../TextContent/TextContent', () => ({
	default: () => <div data-testid="text-content">TextContent</div>,
}));

const createWrapper = (searchQuery: string | null = null) => {
	return ({ children }: { children: ReactNode }) => (
		<HomeContext.Provider value={{ searchQuery, setSearchQuery: vi.fn() }}>{children}</HomeContext.Provider>
	);
};

describe('Banner', () => {
	it('should render banner when no search query', () => {
		render(<Banner />, { wrapper: createWrapper() });

		expect(screen.getByAltText('image-search')).toBeInTheDocument();
		expect(screen.getByText('home.searchTitle')).toBeInTheDocument();
		expect(screen.getByTestId('banner')).toBeInTheDocument();
	});

	it('should render banner when search query is empty string', () => {
		render(<Banner />, { wrapper: createWrapper('') });

		expect(screen.getByAltText('image-search')).toBeInTheDocument();
		expect(screen.getByText('home.searchTitle')).toBeInTheDocument();
	});

	it('should not render banner when search query exists', () => {
		render(<Banner />, { wrapper: createWrapper('test query') });

		expect(screen.queryByAltText('image-search')).not.toBeInTheDocument();
		expect(screen.queryByText('home.searchTitle')).not.toBeInTheDocument();
	});

	it('should have correct CSS classes when rendered', () => {
		render(<Banner />, { wrapper: createWrapper() });

		const banner = screen.getByTestId('banner');
		expect(banner).toHaveClass('flex', 'flex-col', 'gap-8', 'justify-center', 'items-center', 'flex-1');
	});

	it('should handle single character search query', () => {
		render(<Banner />, { wrapper: createWrapper('a') });

		expect(screen.queryByAltText('image-search')).not.toBeInTheDocument();
		expect(screen.queryByText('home.searchTitle')).not.toBeInTheDocument();
	});
});
