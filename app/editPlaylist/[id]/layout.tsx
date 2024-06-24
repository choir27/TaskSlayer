export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="column flex">{children}</main>;
}
