import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/utils';
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';

describe('Avatar Components', () => {
	describe('Avatar', () => {
		it('should render avatar container', () => {
			render(<Avatar data-testid="avatar" />);

			const avatar = screen.getByTestId('avatar');
			expect(avatar).toBeInTheDocument();
			expect(avatar).toHaveAttribute('data-slot', 'avatar');
		});

		it('should apply custom className', () => {
			render(<Avatar className="custom-avatar" data-testid="avatar" />);

			const avatar = screen.getByTestId('avatar');
			expect(avatar).toHaveClass('custom-avatar');
		});

		it('should apply default CSS classes', () => {
			render(<Avatar data-testid="avatar" />);

			const avatar = screen.getByTestId('avatar');
			expect(avatar).toHaveClass('relative', 'flex', 'size-8', 'shrink-0', 'overflow-hidden', 'rounded-full');
		});
	});

	describe('AvatarImage', () => {
		it('should render avatar image container', () => {
			render(
				<Avatar data-testid="avatar-container">
					<AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
				</Avatar>
			);

			const container = screen.getByTestId('avatar-container');
			expect(container).toBeInTheDocument();
			expect(container).toHaveAttribute('data-slot', 'avatar');
		});

		it('should render with custom className', () => {
			render(
				<Avatar data-testid="avatar-container">
					<AvatarImage className="custom-image" src="test.jpg" alt="Test" />
				</Avatar>
			);

			const container = screen.getByTestId('avatar-container');
			expect(container).toBeInTheDocument();
		});

		it('should render with default setup', () => {
			render(
				<Avatar data-testid="avatar-container">
					<AvatarImage src="test.jpg" alt="Test" />
				</Avatar>
			);

			const container = screen.getByTestId('avatar-container');
			expect(container).toBeInTheDocument();
		});
	});

	describe('AvatarFallback', () => {
		it('should render avatar fallback', () => {
			render(
				<Avatar>
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
			);

			const fallback = screen.getByText('JD');
			expect(fallback).toBeInTheDocument();
			expect(fallback).toHaveAttribute('data-slot', 'avatar-fallback');
		});

		it('should apply custom className', () => {
			render(
				<Avatar>
					<AvatarFallback className="custom-fallback">AB</AvatarFallback>
				</Avatar>
			);

			const fallback = screen.getByText('AB');
			expect(fallback).toHaveClass('custom-fallback');
		});

		it('should apply default CSS classes', () => {
			render(
				<Avatar>
					<AvatarFallback>CD</AvatarFallback>
				</Avatar>
			);

			const fallback = screen.getByText('CD');
			expect(fallback).toHaveClass('bg-muted', 'flex', 'size-full', 'items-center', 'justify-center', 'rounded-full');
		});
	});

	describe('Complete Avatar', () => {
		it('should render complete avatar with image and fallback', () => {
			render(
				<Avatar data-testid="complete-avatar">
					<AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
			);

			expect(screen.getByTestId('complete-avatar')).toBeInTheDocument();
			expect(screen.getByText('JD')).toBeInTheDocument();
		});

		it('should handle missing image src', () => {
			render(
				<Avatar data-testid="fallback-avatar">
					<AvatarImage alt="Missing image" />
					<AvatarFallback>NA</AvatarFallback>
				</Avatar>
			);

			expect(screen.getByTestId('fallback-avatar')).toBeInTheDocument();
			expect(screen.getByText('NA')).toBeInTheDocument();
		});
	});
});
