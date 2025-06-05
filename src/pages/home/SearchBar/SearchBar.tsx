import { Input } from '@/components/ui/input';
import SearchIcon from '@/assets/search.svg';
import { useHomeContext } from '@/contexts/HomeContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchBar() {
	const { setSearchQuery, searchQuery } = useHomeContext();
	const [searchValue, setSearchValue] = useState('');
	const debouncedSetSearchQuery = useDebounce((query: string) => setSearchQuery(query), 500);

	useEffect(() => {
		debouncedSetSearchQuery(searchValue);
	}, [debouncedSetSearchQuery, searchValue]);

	useEffect(() => {
		if (searchQuery) {
			setSearchValue(searchQuery);
		}
	}, [searchQuery]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
	};

	return (
		<>
			<div className="relative w-full flex-1">
				<div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
					<img src={SearchIcon} alt="search" />
				</div>
				<Input
					value={searchValue}
					placeholder="Search for a username"
					className="pl-11 py-6 bg-[#F2F2F5] border-none rounded-xl"
					onChange={handleSearch}
				/>
			</div>
		</>
	);
}
