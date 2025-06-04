import { useCallback, useRef } from 'react';

export function useDebounce<TArgs extends unknown[], TReturn>(
	callback: (...args: TArgs) => TReturn,
	delay: number = 500
): (...args: TArgs) => void {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const debouncedCallback = useCallback(
		(...args: TArgs) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);

	return debouncedCallback;
}
