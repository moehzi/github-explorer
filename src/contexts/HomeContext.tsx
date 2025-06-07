import { createContext, useContext } from 'react';

type HomeContextType = {
	searchQuery: string | null;
	setSearchQuery: (query: string) => void;
};

export const HomeContext = createContext<HomeContextType | null>(null);

export const useHomeContext = () => {
	const context = useContext(HomeContext);
	if (!context) {
		throw new Error('useHomeContext must be used within a HomeContextProvider');
	}
	return context;
};
