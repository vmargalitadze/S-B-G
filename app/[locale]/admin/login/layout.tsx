export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="fixed inset-x-0 top-24 bottom-24 z-10 grid place-items-center px-4">
      {children}
    </section>
  );
}
