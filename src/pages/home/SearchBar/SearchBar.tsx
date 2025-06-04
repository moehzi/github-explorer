import { Input } from '@/components/ui/input';
import SearchIcon from '@/assets/search.svg';

export default function SearchBar() {
	return (
		<div className="relative w-full">
			<div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
				<img src={SearchIcon} alt="search" />
			</div>
			<Input placeholder="Search for a username" className="pl-11 py-6 bg-[#F2F2F5] border-none rounded-xl" />
		</div>
	);
}
