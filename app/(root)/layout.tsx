export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
  return (
    <div className="flex h-screen flex-col">Root Layout
    <main className="flex-1 max-w-7 p-5 px-10 w-full">{children}</main></div>
  )
}