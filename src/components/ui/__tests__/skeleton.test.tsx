import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/utils';
import { Skeleton } from '../skeleton';

describe('Skeleton', () => {
	it('should render skeleton with default props', () => {
		render(<Skeleton data-testid="skeleton" />);

		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveAttribute('data-slot', 'skeleton');
	});

	it('should apply default CSS classes', () => {
		render(<Skeleton data-testid="skeleton" />);

		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton).toHaveClass('bg-accent', 'animate-pulse', 'rounded-md');
	});

	it('should apply custom className', () => {
		render(<Skeleton className="custom-skeleton" data-testid="skeleton" />);

		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton).toHaveClass('custom-skeleton');
		expect(skeleton).toHaveClass('bg-accent', 'animate-pulse', 'rounded-md');
	});

	it('should handle additional props', () => {
		render(<Skeleton id="test-skeleton" data-testid="skeleton" />);

		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton).toHaveAttribute('id', 'test-skeleton');
	});

	it('should render as div element', () => {
		render(<Skeleton data-testid="skeleton" />);

		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton.tagName).toBe('DIV');
	});

	it('should handle style prop', () => {
		render(<Skeleton style={{ width: '100px', height: '20px' }} data-testid="skeleton" />);

		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton).toHaveStyle({ width: '100px', height: '20px' });
	});
});
