import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-bg text-ink font-sans font-light antialiased">
      <div className="grain-overlay" aria-hidden />
      <Navbar />
      <main className="relative z-[2] flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
