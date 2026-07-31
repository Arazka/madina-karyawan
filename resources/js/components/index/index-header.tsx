import { Link } from '@inertiajs/react';
import { CirclePlus } from 'lucide-react';
import { Button } from '../ui/button';

type IndexHeaderProps = {
    entity: string;
    createUrl: string;
    dataLenght: number;
};

export default function IndexHeader({
    entity,
    createUrl,
    dataLenght,
}: IndexHeaderProps) {
    return (
        <div className="">
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-end sm:justify-between sm:space-y-0">
                <div className="flex gap-4">
                    <div className="w-1 rounded-full bg-indigo-500" />
                    <div className="">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground capitalize">
                            daftar {entity}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Kelola data {entity} yang tersedia di sistem
                        </p>
                    </div>
                </div>

                {dataLenght > 0 && (
                    <Button
                        asChild
                        className="h-12 border border-indigo-200 bg-indigo-100 px-6 font-semibold text-indigo-600 capitalize hover:bg-indigo-200"
                    >
                        <Link href={createUrl}>
                            <CirclePlus />
                            <span>tambah {entity}</span>
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}
