import { createContext, useContext } from 'react';

type HomeContextType = {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
};

export const HomeContext = createContext<HomeContextType>({
	searchQuery: '',
	setSearchQuery: () => {},
});

export const useHomeContext = () => {
	const context = useContext(HomeContext);
	if (!context) {
		throw new Error('useHomeContext must be used within a HomeContextProvider');
	}
	return context;
};
