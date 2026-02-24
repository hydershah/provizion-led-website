import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isVariant = pathname.startsWith('/variant-');

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!isVariant && <Footer />}
    </>
  );
}
