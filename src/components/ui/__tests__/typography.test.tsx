import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/utils';
import { H1, H2, H3, H4, Lead, P, Large, Small, Muted, InlineCode, MultilineCode, List, Quote } from '../typography';

describe('Typography Components', () => {
	describe('H1', () => {
		it('should render h1 element', () => {
			render(<H1>Heading 1</H1>);

			const heading = screen.getByRole('heading', { level: 1 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveTextContent('Heading 1');
		});

		it('should apply custom className', () => {
			render(<H1 className="custom-h1">Heading 1</H1>);

			const heading = screen.getByRole('heading', { level: 1 });
			expect(heading).toHaveClass('custom-h1');
		});
	});

	describe('H2', () => {
		it('should render h2 element', () => {
			render(<H2>Heading 2</H2>);

			const heading = screen.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveTextContent('Heading 2');
		});

		it('should apply custom className', () => {
			render(<H2 className="custom-h2">Heading 2</H2>);

			const heading = screen.getByRole('heading', { level: 2 });
			expect(heading).toHaveClass('custom-h2');
		});
	});

	describe('H3', () => {
		it('should render h3 element', () => {
			render(<H3>Heading 3</H3>);

			const heading = screen.getByRole('heading', { level: 3 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveTextContent('Heading 3');
		});
	});

	describe('H4', () => {
		it('should render h4 element', () => {
			render(<H4>Heading 4</H4>);

			const heading = screen.getByRole('heading', { level: 4 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveTextContent('Heading 4');
		});
	});

	describe('Lead', () => {
		it('should render lead paragraph', () => {
			render(<Lead>Lead text</Lead>);

			const lead = screen.getByText('Lead text');
			expect(lead).toBeInTheDocument();
			expect(lead.tagName).toBe('P');
		});
	});

	describe('P', () => {
		it('should render paragraph', () => {
			render(<P>Paragraph text</P>);

			const paragraph = screen.getByText('Paragraph text');
			expect(paragraph).toBeInTheDocument();
			expect(paragraph.tagName).toBe('P');
		});
	});

	describe('Large', () => {
		it('should render large text', () => {
			render(<Large>Large text</Large>);

			const large = screen.getByText('Large text');
			expect(large).toBeInTheDocument();
			expect(large.tagName).toBe('DIV');
		});
	});

	describe('Small', () => {
		it('should render small text', () => {
			render(<Small>Small text</Small>);

			const small = screen.getByText('Small text');
			expect(small).toBeInTheDocument();
			expect(small.tagName).toBe('P');
		});
	});

	describe('Muted', () => {
		it('should render muted text', () => {
			render(<Muted>Muted text</Muted>);

			const muted = screen.getByText('Muted text');
			expect(muted).toBeInTheDocument();
			expect(muted.tagName).toBe('SPAN');
		});
	});

	describe('InlineCode', () => {
		it('should render inline code', () => {
			render(<InlineCode>const code = true</InlineCode>);

			const code = screen.getByText('const code = true');
			expect(code).toBeInTheDocument();
			expect(code.tagName).toBe('CODE');
		});
	});

	describe('MultilineCode', () => {
		it('should render multiline code', () => {
			render(<MultilineCode>const multiline = true;</MultilineCode>);

			const code = screen.getByText('const multiline = true;');
			expect(code).toBeInTheDocument();
			expect(code.tagName).toBe('PRE');
		});
	});

	describe('List', () => {
		it('should render unordered list', () => {
			render(
				<List>
					<li>Item 1</li>
					<li>Item 2</li>
				</List>
			);

			const list = screen.getByRole('list');
			expect(list).toBeInTheDocument();
			expect(list.tagName).toBe('UL');
			expect(screen.getByText('Item 1')).toBeInTheDocument();
			expect(screen.getByText('Item 2')).toBeInTheDocument();
		});
	});

	describe('Quote', () => {
		it('should render blockquote', () => {
			render(<Quote>This is a quote</Quote>);

			const quote = screen.getByText('This is a quote');
			expect(quote).toBeInTheDocument();
			expect(quote.tagName).toBe('BLOCKQUOTE');
		});
	});

	describe('Component Props', () => {
		it('should handle additional props', () => {
			render(
				<H1 id="test-heading" data-testid="heading">
					Test
				</H1>
			);

			const heading = screen.getByTestId('heading');
			expect(heading).toHaveAttribute('id', 'test-heading');
		});

		it('should merge classNames correctly', () => {
			render(<P className="additional-class">Test paragraph</P>);

			const paragraph = screen.getByText('Test paragraph');
			expect(paragraph).toHaveClass('additional-class');
			expect(paragraph).toHaveClass('leading-7');
		});
	});
});
