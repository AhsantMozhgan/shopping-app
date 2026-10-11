import Header from "@/components/shared/header";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
  return (
    <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 max-w-7 p-5 px-10 w-full">{children}</main>
        <Footer />
    </div>
  )
}
