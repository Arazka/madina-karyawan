import { cn } from '@/lib/utils';
import type { PaginationLinkProps } from '@/types/pagination';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationMeta = {
    from: number;
    to: number;
    total: number;
    links: PaginationLinkProps[];
};

type Props = {
    pagination: PaginationMeta;
};

export default function IndexPagination({ pagination }: Props) {
    const { links, from, to, total } = pagination;

    return (
        <div className="flex items-center justify-between">
            {total > 0 && (
                <div>
                    <p className="text-sm">
                        Showing {from} to {to} of {total}
                    </p>
                </div>
            )}

            {total > 7 && (
                <div>
                    <Pagination>
                        <PaginationContent>
                            {links?.map((link, index) => {
                                const isPrevious =
                                    link.label.includes('&laquo; Previous');
                                const isNext =
                                    link.label.includes('Next &raquo;');

                                return (
                                    <PaginationItem key={index}>
                                        {isPrevious ? (
                                            <PaginationPrevious
                                                href={link.url || '#'}
                                                className={
                                                    !link.url
                                                        ? 'pointer-events-none opacity-50'
                                                        : ''
                                                }
                                            />
                                        ) : isNext ? (
                                            <PaginationNext
                                                href={link.url || '#'}
                                                className={
                                                    !link.url
                                                        ? 'pointer-events-none opacity-50'
                                                        : ''
                                                }
                                            />
                                        ) : (
                                            <PaginationLink
                                                href={link.url || '#'}
                                                isActive={link.active}
                                                className={cn(
                                                    !link.url
                                                        ? 'pointer-events-none opacity-50'
                                                        : '',
                                                    link.active
                                                        ? 'bg-indigo-600 text-white'
                                                        : '',
                                                    'hover:bg-indigo-600 hover:text-white',
                                                )}
                                            >
                                                {link.label}
                                            </PaginationLink>
                                        )}
                                    </PaginationItem>
                                );
                            })}
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
