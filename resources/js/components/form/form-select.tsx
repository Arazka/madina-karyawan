import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

type Item = {
    value: string;
    label: string;
};

type Props = {
    selectLabel: string;
    placeHolder: string;
    items: Item[];
    value?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    error?: string;
};

export default function FormSelect({
    selectLabel,
    placeHolder,
    items,
    value,
    onValueChange,
    disabled,
    error,
}: Props) {
    return (
        <Select value={value} onValueChange={onValueChange} disabled={disabled}>
            <SelectTrigger
                className={cn(
                    error && 'border-rose-600 focus-visible:ring-rose-500',
                    'w-full',
                )}
            >
                <SelectValue placeholder={placeHolder} />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{selectLabel}</SelectLabel>

                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
