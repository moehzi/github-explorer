import RepoIcon from '@/assets/repo-icon.svg';
import { H4, Muted, P } from '@/components/ui/typography';
import StarIcon from '@/assets/star.svg';

export type Repository = {
	id: number;
	name: string;
	description?: string;
	html_url: string;
	stargazers_count: number;
};

type CardRepoProps = {
	repo: Repository;
	className?: string;
	onClick?: (repo: Repository) => void;
};

const CardRepo = ({ repo, className = '', onClick }: CardRepoProps) => {
	const handleClick = () => {
		if (onClick) {
			onClick(repo);
		} else {
			window.open(repo.html_url, '_blank');
		}
	};

	return (
		<div
			className={`flex gap-4 h-[72px] cursor-pointer items-center hover:bg-gray-100 p-2 rounded-lg ${className}`}
			onClick={handleClick}>
			<div className="p-3 rounded-lg bg-[#F2F2F5] flex justify-center items-center max-w-12 w-full">
				<img src={RepoIcon} alt="repo-icon" className="w-6 h-full" />
			</div>
			<div className="flex flex-col gap-0.5 max-w-[800px]">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1">
						<img src={StarIcon} alt="star-icon" className="w-4 h-4" />
						<P className="text-sm line-clamp-1">{repo.stargazers_count}</P>
					</div>
					<H4 className="text-base line-clamp-1">{repo.name}</H4>
				</div>
				<Muted className="text-sm line-clamp-1">{repo.description || 'No description available'}</Muted>
			</div>
		</div>
	);
};

export default CardRepo;
