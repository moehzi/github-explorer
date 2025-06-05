import { Skeleton } from '@/components/ui/skeleton';
import { H3 } from '@/components/ui/typography';

export const loading = () => {
	return (
		<div className="flex flex-col gap-4 items-start w-full max-h-[400px] flex-1">
			<H3></H3>
			{Array.from({ length: 5 }).map((_, index) => (
				<div key={index}>
					<div className="flex items-center space-x-4">
						<Skeleton className="h-12 w-12 rounded-full" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-[250px]" />
							<Skeleton className="h-4 w-[200px]" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
