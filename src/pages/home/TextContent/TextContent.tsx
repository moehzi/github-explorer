import { H2, Lead } from '@/components/ui/typography';

import { useTranslations } from 'next-intl';

export default function TextContent() {
	const t = useTranslations();

	return (
		<div className="flex flex-col gap-1 items-center text-center">
			<H2 className="self-center">{t('home.searchTitle')}</H2>
			<Lead className="max-w-[480px] text-muted-foreground">{t('home.searchDescription')}</Lead>
		</div>
	);
}
