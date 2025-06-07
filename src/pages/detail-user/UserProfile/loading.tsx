import { Skeleton } from '@/components/ui/skeleton';

export default function loading() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<Skeleton className="w-32 h-32 rounded-full" />
			<div className="flex flex-col items-center justify-center gap-2">
				<Skeleton className="h-8 w-48" />
				<Skeleton className="h-6 w-32" />
				<Skeleton className="h-6 w-24" />
			</div>
			<Skeleton className="h-4 w-64" />
			<div className="flex flex-col gap-3">
				<div className="flex gap-3">
					<Skeleton className="h-20 w-32" />
					<Skeleton className="h-20 w-32" />
				</div>
				<Skeleton className="h-20 w-32" />
			</div>
		</div>
	);
}
