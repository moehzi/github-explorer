import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { H2, Lead, P } from '@/components/ui/typography';
import CardProfileCount from '../CardProfileCount/CardProfileCount';
import useDetailUser from '@/hooks/useDetailUser';
import Loading from './loading';

type UserProfileProps = {
	username: string;
};

const UserProfile = ({ username }: UserProfileProps) => {
	const { data, isLoading } = useDetailUser(username ?? '');

	if (isLoading) return <Loading />;

	if (!data) return <div>User not found</div>;

	return (
		<div data-cy="user-profile" className="flex flex-col items-center justify-center gap-4 flex-[1]">
			<Avatar data-cy="user-avatar" className="w-32 h-32">
				<AvatarImage src={data.avatar_url} alt={data.login} />
			</Avatar>
			<div className="flex flex-col items-center justify-center">
				<H2 data-cy="user-name">{data.name}</H2>
				<Lead className="text-lg">@{data.login}</Lead>
				<Lead className="text-lg">
					Joined in{' '}
					{new Date(data.created_at).toLocaleDateString('en-US', {
						year: 'numeric',
					})}
				</Lead>
			</div>
			<P className="max-w-[400px]">{data.bio}</P>
			<div className="flex flex-col gap-3">
				<div className="flex gap-3">
					<CardProfileCount count={data.followers} description="Followers" />
					<CardProfileCount count={data.following} description="Following" />
				</div>
				<CardProfileCount count={data.public_repos} description="Repositories" />
			</div>
		</div>
	);
};

export default UserProfile;
