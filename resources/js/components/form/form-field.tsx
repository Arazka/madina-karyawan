import InputError from '../input-error';
import { Field, FieldLabel } from '../ui/field';

type FormFieldProps = {
    label: string;
    htmlFor: string;
    error?: string | undefined;
    children: React.ReactNode;
};

export default function FormField({
    label,
    htmlFor,
    error,
    children,
}: FormFieldProps) {
    return (
        // <div className="space-y-2">
        //     <Label htmlFor={htmlFor}>{label}</Label>
        //     {children}
        //     {error && <InputError message={error} />}
        // </div>

        <Field>
            <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
            {children}
            {error && <InputError message={error} />}
        </Field>
    );
}
