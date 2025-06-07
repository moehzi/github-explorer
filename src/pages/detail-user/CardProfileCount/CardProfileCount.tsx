import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

type CardProfileCountProps = {
	count: number;
	description: string;
};

export default function CardProfileCount({ count, description }: CardProfileCountProps) {
	return (
		<Card>
			<CardContent>
				<CardTitle className="text-2xl font-bold">{count}</CardTitle>
				<CardDescription className="text-sm">{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
