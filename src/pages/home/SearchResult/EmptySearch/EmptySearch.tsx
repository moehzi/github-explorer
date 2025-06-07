import { H3, Muted } from '@/components/ui/typography';
import { useTranslations } from 'next-intl';

export default function EmptySearch() {
	const t = useTranslations();

	return (
		<div data-cy="empty-search" className="flex flex-col gap-4 items-start w-full max-h-[400px] flex-1 h-full">
			<H3>{t('home.searchResults')}</H3>
			<div className="flex justify-center items-center flex-1 w-full">
				<Muted>{t('home.emptySearch')}</Muted>
			</div>
		</div>
	);
}
