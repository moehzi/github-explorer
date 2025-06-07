import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Muted, Small } from '@/components/ui/typography';
import { useTranslations } from 'next-intl';

type CardUserProps = {
	username: string;
	avatarUrl: string;
	totalRepositories: number;
	onClick: () => void;
};

export default function CardUser({ username, avatarUrl, totalRepositories, onClick }: CardUserProps) {
	const t = useTranslations();

	console.log(username, 'username');
	return (
		<div
			data-cy="user-card"
			className="flex w-full items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
			onClick={onClick}>
			<Avatar className="w-14 h-14">
				<AvatarImage src={avatarUrl} />
			</Avatar>
			<div className="flex flex-col gap-1">
				<Small>{username}</Small>
				<Muted>
					{totalRepositories} {t('home.repositories')}
				</Muted>
			</div>
		</div>
	);
}
