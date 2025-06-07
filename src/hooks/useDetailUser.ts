import userService from '@/services/UserService';
import { useQuery } from '@tanstack/react-query';

const useDetailUser = (username: string) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['detailUser', username],
		queryFn: () => userService.detailUser(username),
		enabled: !!username,
	});

	return { data, isLoading, error };
};

export default useDetailUser;
