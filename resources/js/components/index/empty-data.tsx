import { Link } from '@inertiajs/react';
import { CirclePlus } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

type EmptyDataProps = {
    entity: string;
    createUrl: string;
};

export default function EmptyData({ entity, createUrl }: EmptyDataProps) {
    return (
        <Card className="border-slate-200 shadow-sm">
            <CardContent className="flex min-h-150 flex-col items-center justify-center py-20">
                <div className="flex flex-col items-center">
                    {/* <img
                        src="/storage/data_not_found/data-not-found.jpg"
                        className="w-72 select-none"
                    /> */}

                    <h3 className="mt-6 text-2xl font-semibold text-slate-800">
                        Belum ada {entity}
                    </h3>

                    <p className="mt-2 max-w-md text-center text-base text-muted-foreground">
                        Mulai tambahkan data {entity} pertama untuk ditampilkan
                        pada sistem.
                    </p>

                    <Button
                        asChild
                        size={`lg`}
                        className="mt-8 rounded-xl border border-indigo-200 bg-indigo-100 font-bold text-indigo-600 capitalize transition-all duration-200 hover:bg-indigo-200"
                    >
                        <Link href={createUrl}>
                            <CirclePlus />
                            <span>tambah {entity} pertama</span>
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
