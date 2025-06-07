import ImageSearch from '../ImageSearch/ImageSearch';
import TextContent from '../TextContent/TextContent';
import { useHomeContext } from '@/contexts/HomeContext';

export default function Banner() {
	const { searchQuery } = useHomeContext();

	if (searchQuery?.length) return null;

	return (
		<div data-cy="banner" data-testid="banner" className="flex flex-col gap-8 justify-center items-center flex-1">
			<ImageSearch />
			<TextContent />
		</div>
	);
}
