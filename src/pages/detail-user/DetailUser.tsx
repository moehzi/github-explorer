import UserProfile from './UserProfile/UserProfile';
import { useParams } from 'react-router-dom';
import UserRepos from './UserRepos/UserRepos';

const DetailUser = () => {
	const { username } = useParams<{ username: string }>();

	return (
		<div className="flex items-start justify-center gap-10 flex-wrap">
			<UserProfile username={username ?? ''} />
			<UserRepos username={username ?? ''} />
		</div>
	);
};

export default DetailUser;
