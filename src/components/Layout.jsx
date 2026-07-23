import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
