import useUserRepos from '@/hooks/useUserRepos';
import RepoIcon from '@/assets/repo-icon.svg';
import { H2, H4, Muted } from '@/components/ui/typography';
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
					<div
						key={repo.id}
						className="flex gap-4 h-[72px] cursor-pointer items-center hover:bg-gray-100 p-2 rounded-lg"
						onClick={() => {
							window.open(repo.html_url, '_blank');
						}}>
						<div className="p-3 rounded-lg bg-[#F2F2F5] flex justify-center items-center max-w-12  w-full">
							<img src={RepoIcon} alt="repo-icon" className="w-6 h-full" />
						</div>
						<div className="flex flex-col gap-0.5 max-w-[800px]">
							<H4 className="text-base line-clamp-1">{repo.name}</H4>
							<Muted className="text-sm line-clamp-1">{repo.description}</Muted>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserRepos;
