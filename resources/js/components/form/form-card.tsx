import { cn } from '@/lib/utils';
import { FieldGroup } from '../ui/field';

type FormCardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function FormCard({ children, className }: FormCardProps) {
    return (
        <FieldGroup
            className={cn(
                'max-w-3xl space-y-2 rounded-2xl border px-4 py-6 shadow-sm sm:px-6 sm:py-8',
                className,
            )}
        >
            {children}
        </FieldGroup>
    );
}
