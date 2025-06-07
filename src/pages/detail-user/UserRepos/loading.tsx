import { Skeleton } from '@/components/ui/skeleton';
import { H2 } from '@/components/ui/typography';

const Loading = () => {
	return (
		<div className="flex flex-col gap-4 flex-[2]">
			<H2>Repositories</H2>
			<div className="flex flex-col gap-4 overflow-auto max-h-[400px] md:max-h-[600px]">
				{[...Array(5)].map((_, index) => (
					<div key={index} className="flex gap-4 h-[72px]">
						<Skeleton className="p-3 rounded-lg w-12 h-12" />
						<div className="flex flex-col gap-1 max-w-[800px]">
							<Skeleton className="h-5 w-48" />
							<Skeleton className="h-4 w-full" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Loading;
