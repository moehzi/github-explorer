import UserService from '@/services/UserService';
import { useQuery } from '@tanstack/react-query';

type UseUserProps = {
	query: string;
	page: number;
	perPage: number;
};

const useSearchUser = (props?: UseUserProps) => {
	const { query, page, perPage } = props || {};

	const { data, isLoading, ...rest } = useQuery({
		queryKey: ['users', props],
		queryFn: () => UserService.searchUsers(query ?? '', page, perPage),
		enabled: !!query,
	});

	return { data, isLoading, ...rest };
};

export default useSearchUser;
