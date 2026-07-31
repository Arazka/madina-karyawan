export default function IndexLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="space-y-6 p-4 sm:p-6">{children}</div>;
}
