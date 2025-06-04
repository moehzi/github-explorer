import { useQueryState, parseAsString } from 'nuqs';
import { HomeContext } from './HomeContext';

export const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [searchQuery, setSearchQuery] = useQueryState('search', parseAsString.withDefault(''));

	return <HomeContext.Provider value={{ searchQuery, setSearchQuery }}>{children}</HomeContext.Provider>;
};
