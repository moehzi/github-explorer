import { Input } from '@/components/ui/input';
import SearchIcon from '@/assets/search.svg';
import useSearchUser from '@/hooks/useSearchUser';
import { useHomeContext } from '@/contexts/HomeContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchBar() {
	const { searchQuery, setSearchQuery } = useHomeContext();
	const [searchValue, setSearchValue] = useState('');
	const debouncedSetSearchQuery = useDebounce((query: string) => setSearchQuery(query), 500);

	const { data } = useSearchUser({
		query: searchQuery ?? '',
		page: 1,
		perPage: 10,
	});

	console.log(data, 'data');

	useEffect(() => {
		debouncedSetSearchQuery(searchValue);
	}, [debouncedSetSearchQuery, searchValue]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
	};

	return (
		<div className="relative w-full">
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
	);
}
