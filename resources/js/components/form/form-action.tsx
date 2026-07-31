type FormActionProps = {
    children: React.ReactNode;
};

export default function FormAction({ children }: FormActionProps) {
    return (
        <div className="flex w-full flex-col-reverse items-center justify-center gap-3 pt-6 sm:flex-row sm:justify-end">
            {children}
        </div>
    );
}
