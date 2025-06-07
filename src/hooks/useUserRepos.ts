import { useQuery } from '@tanstack/react-query';
import { userService, type Repo } from '@/services/UserService';

const useUserRepos = (username: string) => {
	const { data, isLoading, error } = useQuery<Repo[]>({
		queryKey: ['user-repos', username],
		queryFn: () => userService.getUserRepos(username),
		enabled: !!username,
	});

	return { data, isLoading, error };
};

export default useUserRepos;
