export default function TicketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-8">{children}</div>;
}
