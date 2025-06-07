import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../../test/utils';
import ImageSearch from '../ImageSearch';

vi.mock('@/assets/image-search.png', () => ({
	default: 'image-search.png',
}));

describe('ImageSearch', () => {
	it('should render search image', () => {
		render(<ImageSearch />);

		const image = screen.getByAltText('image-search');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', 'image-search.png');
		expect(image).toHaveAttribute('width', '400');
	});

	it('should have correct container class', () => {
		render(<ImageSearch />);

		const container = screen.getByAltText('image-search').parentElement;
		expect(container).toHaveClass('flex-1');
	});

	it('should render image with correct attributes', () => {
		render(<ImageSearch />);

		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('alt', 'image-search');
		expect(image).toHaveAttribute('width', '400');
	});
});
