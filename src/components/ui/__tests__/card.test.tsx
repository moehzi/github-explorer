import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/utils';
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '../card';

describe('Card Components', () => {
	describe('Card', () => {
		it('should render card with default props', () => {
			render(<Card>Card content</Card>);

			const card = screen.getByText('Card content');
			expect(card).toBeInTheDocument();
			expect(card).toHaveAttribute('data-slot', 'card');
		});

		it('should apply custom className', () => {
			render(<Card className="custom-card">Card content</Card>);

			const card = screen.getByText('Card content');
			expect(card).toHaveClass('custom-card');
		});
	});

	describe('CardHeader', () => {
		it('should render card header', () => {
			render(<CardHeader>Header content</CardHeader>);

			const header = screen.getByText('Header content');
			expect(header).toBeInTheDocument();
			expect(header).toHaveAttribute('data-slot', 'card-header');
		});

		it('should apply custom className', () => {
			render(<CardHeader className="custom-header">Header</CardHeader>);

			const header = screen.getByText('Header');
			expect(header).toHaveClass('custom-header');
		});
	});

	describe('CardTitle', () => {
		it('should render card title', () => {
			render(<CardTitle>Title content</CardTitle>);

			const title = screen.getByText('Title content');
			expect(title).toBeInTheDocument();
			expect(title).toHaveAttribute('data-slot', 'card-title');
		});

		it('should apply custom className', () => {
			render(<CardTitle className="custom-title">Title</CardTitle>);

			const title = screen.getByText('Title');
			expect(title).toHaveClass('custom-title');
		});
	});

	describe('CardDescription', () => {
		it('should render card description', () => {
			render(<CardDescription>Description content</CardDescription>);

			const description = screen.getByText('Description content');
			expect(description).toBeInTheDocument();
			expect(description).toHaveAttribute('data-slot', 'card-description');
		});

		it('should apply custom className', () => {
			render(<CardDescription className="custom-desc">Description</CardDescription>);

			const description = screen.getByText('Description');
			expect(description).toHaveClass('custom-desc');
		});
	});

	describe('CardAction', () => {
		it('should render card action', () => {
			render(<CardAction>Action content</CardAction>);

			const action = screen.getByText('Action content');
			expect(action).toBeInTheDocument();
			expect(action).toHaveAttribute('data-slot', 'card-action');
		});

		it('should apply custom className', () => {
			render(<CardAction className="custom-action">Action</CardAction>);

			const action = screen.getByText('Action');
			expect(action).toHaveClass('custom-action');
		});
	});

	describe('CardContent', () => {
		it('should render card content', () => {
			render(<CardContent>Content</CardContent>);

			const content = screen.getByText('Content');
			expect(content).toBeInTheDocument();
			expect(content).toHaveAttribute('data-slot', 'card-content');
		});

		it('should apply custom className', () => {
			render(<CardContent className="custom-content">Content</CardContent>);

			const content = screen.getByText('Content');
			expect(content).toHaveClass('custom-content');
		});
	});

	describe('CardFooter', () => {
		it('should render card footer', () => {
			render(<CardFooter>Footer content</CardFooter>);

			const footer = screen.getByText('Footer content');
			expect(footer).toBeInTheDocument();
			expect(footer).toHaveAttribute('data-slot', 'card-footer');
		});

		it('should apply custom className', () => {
			render(<CardFooter className="custom-footer">Footer</CardFooter>);

			const footer = screen.getByText('Footer');
			expect(footer).toHaveClass('custom-footer');
		});
	});

	describe('Complete Card', () => {
		it('should render complete card structure', () => {
			render(
				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card Description</CardDescription>
						<CardAction>Action</CardAction>
					</CardHeader>
					<CardContent>Card Content</CardContent>
					<CardFooter>Card Footer</CardFooter>
				</Card>
			);

			expect(screen.getByText('Card Title')).toBeInTheDocument();
			expect(screen.getByText('Card Description')).toBeInTheDocument();
			expect(screen.getByText('Action')).toBeInTheDocument();
			expect(screen.getByText('Card Content')).toBeInTheDocument();
			expect(screen.getByText('Card Footer')).toBeInTheDocument();
		});
	});
});
