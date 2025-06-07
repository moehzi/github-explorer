import React from 'react';
import { AppLogo } from '@/layout/MainLayout';

const MainLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="px-8 mt-12 md:mt-24 max-w-[1440px] mx-auto gap-16 max-h-[1200px] justify-around">
			<AppLogo />
			<div className="flex flex-col gap-4">{children}</div>
		</div>
	);
};

export default MainLayout;
