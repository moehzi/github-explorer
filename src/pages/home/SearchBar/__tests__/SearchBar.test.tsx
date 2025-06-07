import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '../../../../test/utils';
import SearchBar from '../SearchBar';
import { HomeContext } from '@/contexts/HomeContext';
import type { ReactNode } from 'react';

vi.mock('@/assets/search.svg', () => ({
	default: 'search-icon.svg',
}));

vi.mock('@/hooks/useDebounce', () => ({
	useDebounce: vi.fn((callback) => callback),
}));

const mockSetSearchQuery = vi.fn();

const createWrapper = (searchQuery = '') => {
	return ({ children }: { children: ReactNode }) => (
		<HomeContext.Provider value={{ searchQuery, setSearchQuery: mockSetSearchQuery }}>{children}</HomeContext.Provider>
	);
};

describe('SearchBar', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should render search input with placeholder', () => {
		render(<SearchBar />, { wrapper: createWrapper() });

		const input = screen.getByPlaceholderText('Search for a username');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('data-cy', 'search-input');
	});

	it('should render search icon', () => {
		render(<SearchBar />, { wrapper: createWrapper() });

		const icon = screen.getByAltText('search');
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute('src', 'search-icon.svg');
	});

	it('should initialize with search query from context', () => {
		render(<SearchBar />, { wrapper: createWrapper('initial query') });

		const input = screen.getByDisplayValue('initial query');
		expect(input).toBeInTheDocument();
	});

	it('should update input value when typing', () => {
		render(<SearchBar />, { wrapper: createWrapper() });

		const input = screen.getByPlaceholderText('Search for a username');

		fireEvent.change(input, { target: { value: 'test user' } });

		expect(input).toHaveValue('test user');
	});

	it('should call setSearchQuery when input changes', () => {
		render(<SearchBar />, { wrapper: createWrapper() });

		const input = screen.getByPlaceholderText('Search for a username');

		act(() => {
			fireEvent.change(input, { target: { value: 'test user' } });
		});

		expect(mockSetSearchQuery).toHaveBeenCalledWith('test user');
	});

	it('should handle empty input', () => {
		render(<SearchBar />, { wrapper: createWrapper('initial') });

		const input = screen.getByDisplayValue('initial');

		act(() => {
			fireEvent.change(input, { target: { value: '' } });
		});

		expect(input).toHaveValue('');
		expect(mockSetSearchQuery).toHaveBeenCalledWith('');
	});

	it('should have correct CSS classes', () => {
		render(<SearchBar />, { wrapper: createWrapper() });

		const input = screen.getByPlaceholderText('Search for a username');
		expect(input).toHaveClass('pl-11', 'py-6', 'bg-[#F2F2F5]', 'border-none', 'rounded-xl');
	});

	it('should handle multiple rapid changes', () => {
		render(<SearchBar />, { wrapper: createWrapper() });

		const input = screen.getByPlaceholderText('Search for a username');

		act(() => {
			fireEvent.change(input, { target: { value: 'a' } });
			fireEvent.change(input, { target: { value: 'ab' } });
			fireEvent.change(input, { target: { value: 'abc' } });
		});

		expect(input).toHaveValue('abc');
		expect(mockSetSearchQuery).toHaveBeenCalledWith('abc');
	});
});
