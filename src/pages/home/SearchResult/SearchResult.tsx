import { H3 } from '@/components/ui/typography';
import { useHomeContext } from '@/contexts/HomeContext';
import useSearchUser from '@/hooks/useSearchUser';
import { useTranslations } from 'next-intl';
import CardUser from './CardUser/CardUser';
import { loading as Loading } from './loading';
import EmptySearch from './EmptySearch/EmptySearch';
import { useNavigate } from 'react-router-dom';

export default function SearchResult() {
	const t = useTranslations();
	const { searchQuery } = useHomeContext();
	const navigate = useNavigate();

	const { data, isLoading } = useSearchUser({
		query: searchQuery ?? '',
		page: 1,
		perPage: 5,
	});

	if (isLoading)
		return (
			<div className="max-h-[400px] flex-1">
				<Loading />
			</div>
		);

	if (!data?.items.length && searchQuery) return <EmptySearch />;

	if (!data?.items.length) return null;

	return (
		<div data-cy="search-results" className="flex flex-col gap-4 items-start w-full max-h-[400px] flex-1">
			<H3>{t('home.searchResults')}</H3>
			{data.items.map((item) => (
				<CardUser
					key={item.id}
					username={item.login}
					avatarUrl={item.avatar_url}
					totalRepositories={item.public_repos}
					onClick={() => {
						navigate(`/${item.login}`);
					}}
				/>
			))}
		</div>
	);
}
