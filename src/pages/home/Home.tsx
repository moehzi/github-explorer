import { HomeContextProvider } from '@/contexts/HomeContextProvider';
import SearchBar from './SearchBar/SearchBar';
import SearchResult from './SearchResult/SearchResult';
import Banner from './Banner/Banner';

const Home = () => {
	return (
		<HomeContextProvider>
			<div className="flex flex-col gap-12 py-8 justify-center items-center">
				<SearchBar />
				<Banner />
			</div>
			<SearchResult />
		</HomeContextProvider>
	);
};

export default Home;
