import ImageSearch from './ImageSearch/ImageSearch';
import SearchBar from './SearchBar/SearchBar';

const Home = () => {
	return (
		<div className="flex flex-col gap-6 py-8">
			<SearchBar />
			<ImageSearch />
		</div>
	);
};

export default Home;
