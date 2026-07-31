import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function SearchFilter() {
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="relative w-full max-w-xl">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    type="search"
                    // value={search}
                    placeholder={`Search...`}
                    // onChange={(e) => onSearchChange?.(e.target.value)}
                    className="rounded-xl bg-background pl-10"
                />
            </div>

            <Button
                variant="outline"
                // onClick={onFilterClick}
                // size={`sm`}
            >
                <SlidersHorizontal className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:block">Filter</span>
            </Button>
        </div>
    );
}
