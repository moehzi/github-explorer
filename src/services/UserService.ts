import axios, { AxiosError } from 'axios';

export interface User {
	id: number;
	login: string;
	avatar_url: string;
	name: string | null;
	bio: string | null;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
}

class UserService {
	private baseUrl: string;

	constructor() {
		this.baseUrl = 'https://api.github.com';
	}

	async searchUsers(query: string, page?: number, perPage?: number): Promise<{ items: User[]; total_count: number }> {
		try {
			const response = await axios.get(`${this.baseUrl}/search/users`, {
				params: {
					q: query,
					page,
					per_page: perPage,
				},
			});
			return response.data;
		} catch (error: unknown) {
			const axiosError = error as AxiosError;
			throw new Error(`Failed to search users: ${axiosError.message}`);
		}
	}
}

export const userService = new UserService();
export default userService;
