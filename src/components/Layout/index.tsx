import Footer from '../Footer';
import { Navbar } from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="main-wrapper">
        <div className="relative min-h-screen flex flex-col">
          {/* This 'children' prop is what allows App.tsx content to show up */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
