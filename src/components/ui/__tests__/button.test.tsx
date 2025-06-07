import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../test/utils';
import { Button } from '../button';

describe('Button', () => {
	it('should render button with default props', () => {
		render(<Button>Click me</Button>);

		const button = screen.getByRole('button', { name: 'Click me' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('data-slot', 'button');
	});

	it('should handle click events', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);

		const button = screen.getByRole('button', { name: 'Click me' });
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should render with different variants', () => {
		const { rerender } = render(<Button variant="destructive">Destructive</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();

		rerender(<Button variant="outline">Outline</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();

		rerender(<Button variant="secondary">Secondary</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();

		rerender(<Button variant="ghost">Ghost</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();

		rerender(<Button variant="link">Link</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should render with different sizes', () => {
		const { rerender } = render(<Button size="sm">Small</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();

		rerender(<Button size="lg">Large</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();

		rerender(<Button size="icon">Icon</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should be disabled when disabled prop is true', () => {
		render(<Button disabled>Disabled</Button>);

		const button = screen.getByRole('button', { name: 'Disabled' });
		expect(button).toBeDisabled();
	});

	it('should apply custom className', () => {
		render(<Button className="custom-class">Custom</Button>);

		const button = screen.getByRole('button', { name: 'Custom' });
		expect(button).toHaveClass('custom-class');
	});

	it('should render as child component when asChild is true', () => {
		render(
			<Button asChild>
				<a href="/test">Link Button</a>
			</Button>
		);

		const link = screen.getByRole('link', { name: 'Link Button' });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/test');
		expect(link).toHaveAttribute('data-slot', 'button');
	});

	it('should handle type attribute', () => {
		render(<Button type="submit">Submit</Button>);

		const button = screen.getByRole('button', { name: 'Submit' });
		expect(button).toHaveAttribute('type', 'submit');
	});

	it('should render with aria attributes', () => {
		render(<Button aria-label="Close dialog">×</Button>);

		const button = screen.getByRole('button', { name: 'Close dialog' });
		expect(button).toHaveAttribute('aria-label', 'Close dialog');
	});
});
