import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export default function FormInput({
    error,
    className,
    type = 'text',
    ...props
}: FormInputProps) {
    return (
        <Input
            type={type}
            className={cn(
                error && 'border-rose-600 focus-visible:ring-rose-500',
                className,
            )}
            {...props}
        />
    );
}
