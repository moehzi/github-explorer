import React from 'react';
import { AppLogo } from '@/layout/MainLayout';

const MainLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="px-8 py-6 max-w-[1000px] mx-auto flex flex-col gap-4 min-h-screen justify-center">
			<AppLogo />
			{children}
		</div>
	);
};

export default MainLayout;
