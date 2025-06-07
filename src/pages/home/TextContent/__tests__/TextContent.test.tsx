import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../../test/utils';
import TextContent from '../TextContent';

describe('TextContent', () => {
	it('should render search title and description', () => {
		render(<TextContent />);

		expect(screen.getByText('home.searchTitle')).toBeInTheDocument();
		expect(screen.getByText('home.searchDescription')).toBeInTheDocument();
	});

	it('should have correct layout structure', () => {
		render(<TextContent />);

		const container = screen.getByText('home.searchTitle').parentElement;
		expect(container).toHaveClass('flex', 'flex-col', 'gap-1', 'items-center', 'text-center');
	});

	it('should apply correct CSS classes to title', () => {
		render(<TextContent />);

		const title = screen.getByText('home.searchTitle');
		expect(title).toHaveClass('self-center');
	});

	it('should apply correct CSS classes to description', () => {
		render(<TextContent />);

		const description = screen.getByText('home.searchDescription');
		expect(description).toHaveClass('max-w-[480px]', 'text-muted-foreground');
	});
});
