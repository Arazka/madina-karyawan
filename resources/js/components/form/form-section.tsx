import {
    FieldDescription,
    FieldGroup,
    FieldLegend,
    FieldSet,
} from '../ui/field';

type FormSectionProps = {
    title?: string;
    description?: string;
    children: React.ReactNode;
};

export default function FormSection({
    title,
    description,
    children,
}: FormSectionProps) {
    return (
        // <>
        //     {title && description && (
        //         <CardHeader>
        //             <CardTitle>{title}</CardTitle>
        //             <CardDescription>{description}</CardDescription>
        //         </CardHeader>
        //     )}

        //     <CardContent className="space-y-6">{children}</CardContent>
        // </>

        <FieldSet>
            <FieldLegend>{title}</FieldLegend>
            <FieldDescription>{description}</FieldDescription>
            <FieldGroup>{children}</FieldGroup>
        </FieldSet>
    );
}
