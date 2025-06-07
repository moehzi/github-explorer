import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../test/utils';
import CardRepo, { type Repository } from '../CardRepo';

// Mock the repo icon
vi.mock('@/assets/repo-icon.svg', () => ({
	default: 'repo-icon.svg',
}));

const mockRepo: Repository = {
	id: 1,
	name: 'test-repo',
	description: 'A test repository',
	html_url: 'https://github.com/user/test-repo',
};

const mockRepoWithoutDescription: Repository = {
	id: 2,
	name: 'no-desc-repo',
	html_url: 'https://github.com/user/no-desc-repo',
};

describe('CardRepo', () => {
	// Mock window.open
	const mockWindowOpen = vi.fn();
	Object.defineProperty(window, 'open', {
		value: mockWindowOpen,
		writable: true,
	});

	beforeEach(() => {
		mockWindowOpen.mockClear();
	});

	it('should render repository information correctly', () => {
		render(<CardRepo repo={mockRepo} />);

		expect(screen.getByText('test-repo')).toBeInTheDocument();
		expect(screen.getByText('A test repository')).toBeInTheDocument();
		expect(screen.getByAltText('repo-icon')).toBeInTheDocument();
	});

	it('should render default description when description is not provided', () => {
		render(<CardRepo repo={mockRepoWithoutDescription} />);

		expect(screen.getByText('no-desc-repo')).toBeInTheDocument();
		expect(screen.getByText('No description available')).toBeInTheDocument();
	});

	it('should open repository URL in new tab when clicked', () => {
		render(<CardRepo repo={mockRepo} />);

		const cardElement = screen.getByText('test-repo').closest('div')?.parentElement;
		fireEvent.click(cardElement!);

		expect(mockWindowOpen).toHaveBeenCalledWith('https://github.com/user/test-repo', '_blank');
	});

	it('should call custom onClick handler when provided', () => {
		const mockOnClick = vi.fn();
		render(<CardRepo repo={mockRepo} onClick={mockOnClick} />);

		const cardElement = screen.getByText('test-repo').closest('div')?.parentElement;
		fireEvent.click(cardElement!);

		expect(mockOnClick).toHaveBeenCalledWith(mockRepo);
		expect(mockWindowOpen).not.toHaveBeenCalled();
	});

	it('should apply custom className', () => {
		render(<CardRepo repo={mockRepo} className="custom-class" />);

		const cardElement = screen.getByText('test-repo').closest('div')?.parentElement;
		expect(cardElement).toHaveClass('custom-class');
	});

	it('should have proper styling classes', () => {
		render(<CardRepo repo={mockRepo} />);

		const cardElement = screen.getByText('test-repo').closest('div')?.parentElement;
		expect(cardElement).toHaveClass(
			'flex',
			'gap-4',
			'h-[72px]',
			'cursor-pointer',
			'items-center',
			'hover:bg-gray-100',
			'p-2',
			'rounded-lg'
		);
	});

	it('should render icon container with proper styling', () => {
		render(<CardRepo repo={mockRepo} />);

		const iconContainer = screen.getByAltText('repo-icon').closest('div');
		expect(iconContainer).toHaveClass(
			'p-3',
			'rounded-lg',
			'bg-[#F2F2F5]',
			'flex',
			'justify-center',
			'items-center',
			'max-w-12',
			'w-full'
		);
	});

	it('should render text content with proper styling', () => {
		render(<CardRepo repo={mockRepo} />);

		const textContainer = screen.getByText('test-repo').parentElement;
		expect(textContainer).toHaveClass('flex', 'flex-col', 'gap-0.5', 'max-w-[800px]');
	});
});
