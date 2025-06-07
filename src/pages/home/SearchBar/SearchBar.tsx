import { Input } from '@/components/ui/input';
import SearchIcon from '@/assets/search.svg';
import { useHomeContext } from '@/contexts/HomeContext';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchBar() {
	const { setSearchQuery, searchQuery } = useHomeContext();
	const [searchValue, setSearchValue] = useState(searchQuery ?? '');

	const updateSearchQuery = useCallback(
		(value: string) => {
			setSearchQuery(value);
		},
		[setSearchQuery]
	);

	const debouncedSetSearchQuery = useDebounce(updateSearchQuery, 500);

	const handleSearch = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			setSearchValue(value);
			debouncedSetSearchQuery(value);
		},
		[debouncedSetSearchQuery]
	);

	return (
		<>
			<div className="relative w-full flex-1">
				<div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
					<img src={SearchIcon} alt="search" />
				</div>
				<Input
					data-cy="search-input"
					value={searchValue}
					placeholder="Search for a username"
					className="pl-11 py-6 bg-[#F2F2F5] border-none rounded-xl"
					onChange={handleSearch}
				/>
			</div>
		</>
	);
}
