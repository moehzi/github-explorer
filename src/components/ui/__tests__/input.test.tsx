import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../test/utils';
import { Input } from '../input';

describe('Input', () => {
	it('should render input with default props', () => {
		render(<Input />);

		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('data-slot', 'input');
	});

	it('should handle value changes', () => {
		const handleChange = vi.fn();
		render(<Input onChange={handleChange} />);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'test value' } });

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(input).toHaveValue('test value');
	});

	it('should render with placeholder', () => {
		render(<Input placeholder="Enter text here" />);

		const input = screen.getByPlaceholderText('Enter text here');
		expect(input).toBeInTheDocument();
	});

	it('should render with different input types', () => {
		const { rerender } = render(<Input type="email" />);
		expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

		rerender(<Input type="password" />);
		const passwordInput = screen.getByDisplayValue('');
		expect(passwordInput).toHaveAttribute('type', 'password');

		rerender(<Input type="number" />);
		expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number');
	});

	it('should be disabled when disabled prop is true', () => {
		render(<Input disabled />);

		const input = screen.getByRole('textbox');
		expect(input).toBeDisabled();
	});

	it('should apply custom className', () => {
		render(<Input className="custom-input" />);

		const input = screen.getByRole('textbox');
		expect(input).toHaveClass('custom-input');
	});

	it('should handle controlled input', () => {
		const handleChange = vi.fn();
		render(<Input value="controlled value" onChange={handleChange} />);

		const input = screen.getByDisplayValue('controlled value');
		expect(input).toBeInTheDocument();
	});

	it('should handle focus and blur events', () => {
		const handleFocus = vi.fn();
		const handleBlur = vi.fn();
		render(<Input onFocus={handleFocus} onBlur={handleBlur} />);

		const input = screen.getByRole('textbox');

		fireEvent.focus(input);
		expect(handleFocus).toHaveBeenCalledTimes(1);

		fireEvent.blur(input);
		expect(handleBlur).toHaveBeenCalledTimes(1);
	});

	it('should render with aria attributes', () => {
		render(<Input aria-label="Search input" aria-describedby="search-help" />);

		const input = screen.getByLabelText('Search input');
		expect(input).toHaveAttribute('aria-describedby', 'search-help');
	});

	it('should handle required attribute', () => {
		render(<Input required />);

		const input = screen.getByRole('textbox');
		expect(input).toBeRequired();
	});

	it('should handle readonly attribute', () => {
		render(<Input readOnly value="readonly value" />);

		const input = screen.getByDisplayValue('readonly value');
		expect(input).toHaveAttribute('readonly');
	});
});
