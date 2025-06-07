import useUserRepos from '@/hooks/useUserRepos';
import { H2 } from '@/components/ui/typography';
import CardRepo from '@/components/CardRepo';
import Loading from './loading';

type UserReposProps = {
	username: string;
};

const UserRepos = ({ username }: UserReposProps) => {
	const { data: repos, isLoading, error } = useUserRepos(username);

	if (isLoading) return <Loading />;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col gap-4 flex-[2]">
			<H2>Repositories</H2>
			<div className="flex flex-col gap-4 overflow-auto max-h-[400px] md:max-h-[600px]">
				{repos?.map((repo) => (
					<CardRepo key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
};

export default UserRepos;
