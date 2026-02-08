import type { Metadata } from 'next';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'HK Cricket',
  description: 'Hong Kong Cricket App - Live scores, news, and more',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
