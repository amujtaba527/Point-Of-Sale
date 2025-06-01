import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} min-h-screen bg-[#F1F3F4]`}>
      <div className="flex">
        <Sidebar>
        <main className="flex-1 p-6">
          {children}
        </main>
        </Sidebar>
      </div>
    </div>
  );
}