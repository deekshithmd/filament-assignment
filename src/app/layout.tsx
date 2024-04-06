import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment",
  description: "Filament Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-full h-screen bg-[#111113] flex flex-col justify-start items-center'>
          <Header />
          <div className='w-full max-w-[1440px] flex h-full items-start overflow-y-auto'>
            <div className='w-[16.6%] h-full overflow-y-auto'>
              <Sidebar />
            </div>
            <main className='w-auto h-full flex flex-1 overflow-y-auto text-white'>
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
