type FormPageHeaderProps = {
    title: string;
    description: string;
};

export default function FormPageHeader({
    title,
    description,
}: FormPageHeaderProps) {
    return (
        <div className="flex gap-4">
            <div className="w-1 rounded-full bg-indigo-500" />
            <div className="">
                <h1 className="text-2xl font-bold tracking-tight text-foreground capitalize">
                    {title}
                </h1>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}
