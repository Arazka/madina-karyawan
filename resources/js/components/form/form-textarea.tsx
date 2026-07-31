import { cn } from '@/lib/utils';
import { Textarea } from '../ui/textarea';

type FormTextareaProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeHolder: string;
    error?: string | undefined;
};

export default function FormTextarea({
    value,
    onChange,
    placeHolder,
    error,
}: FormTextareaProps) {
    return (
        <Textarea
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
            className={cn(error && 'border-rose-600')}
        />
    );
}
