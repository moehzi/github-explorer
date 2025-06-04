import { HomeContextProvider } from '@/contexts/HomeContextProvider';
import ImageSearch from './ImageSearch/ImageSearch';
import SearchBar from './SearchBar/SearchBar';
import TextContent from './TextContent/TextContent';

const Home = () => {
	return (
		<HomeContextProvider>
			<div className="flex flex-col gap-12 py-8 justify-center items-center">
				<SearchBar />
				<div className="flex flex-col gap-8 justify-center items-center">
					<ImageSearch />
					<TextContent />
				</div>
			</div>
		</HomeContextProvider>
	);
};

export default Home;
