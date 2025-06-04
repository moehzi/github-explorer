import Logo from '@/assets/icon.svg';
import { H1 } from '@/components/ui/typography';

export function AppLogo() {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="flex items-center gap-4">
				<img src={Logo} alt="logo" width={40} height={40} />
				<H1>Git Explorer</H1>
			</div>
		</div>
	);
}
