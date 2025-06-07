import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('cn utility function', () => {
	it('should merge class names correctly', () => {
		const result = cn('class1', 'class2');
		expect(result).toBe('class1 class2');
	});

	it('should handle conditional classes', () => {
		const isActive = true;
		const isHidden = false;
		const result = cn('base', isActive && 'conditional', isHidden && 'hidden');
		expect(result).toBe('base conditional');
	});

	it('should handle arrays of classes', () => {
		const result = cn(['class1', 'class2'], 'class3');
		expect(result).toBe('class1 class2 class3');
	});

	it('should handle objects with boolean values', () => {
		const result = cn({
			active: true,
			disabled: false,
			primary: true,
		});
		expect(result).toBe('active primary');
	});

	it('should merge conflicting Tailwind classes', () => {
		const result = cn('p-4', 'p-2');
		expect(result).toBe('p-2');
	});

	it('should handle empty inputs', () => {
		const result = cn();
		expect(result).toBe('');
	});

	it('should handle null and undefined values', () => {
		const result = cn('class1', null, undefined, 'class2');
		expect(result).toBe('class1 class2');
	});

	it('should handle complex combinations', () => {
		const result = cn(
			'base-class',
			['array-class1', 'array-class2'],
			{
				'conditional-true': true,
				'conditional-false': false,
			},
			'final-class'
		);
		expect(result).toBe('base-class array-class1 array-class2 conditional-true final-class');
	});
});
