import React from 'react';
import { AppLogo } from '@/layout/MainLayout';

const MainLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="px-8 py-6 max-w-[1280px] mx-auto flex flex-col gap-4">
			<AppLogo />
			{children}
		</div>
	);
};

export default MainLayout;
