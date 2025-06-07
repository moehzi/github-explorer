import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../test/utils';
import Home from '../Home';

vi.mock('../SearchBar/SearchBar', () => ({
	default: () => <div data-testid="search-bar">SearchBar</div>,
}));

vi.mock('../SearchResult/SearchResult', () => ({
	default: () => <div data-testid="search-result">SearchResult</div>,
}));

vi.mock('../Banner/Banner', () => ({
	default: () => <div data-testid="banner">Banner</div>,
}));

vi.mock('nuqs', () => ({
	useQueryState: vi.fn(() => ['', vi.fn()]),
	parseAsString: {
		withDefault: vi.fn(() => ({})),
	},
}));

describe('Home', () => {
	it('should render all child components', () => {
		render(<Home />);

		expect(screen.getByTestId('search-bar')).toBeInTheDocument();
		expect(screen.getByTestId('search-result')).toBeInTheDocument();
		expect(screen.getByTestId('banner')).toBeInTheDocument();
	});

	it('should have correct layout structure', () => {
		render(<Home />);

		const container = screen.getByTestId('search-bar').parentElement;
		expect(container).toHaveClass('flex', 'flex-col', 'gap-12', 'py-8', 'justify-center', 'items-center');
	});
});
