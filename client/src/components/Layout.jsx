import Navbar from './Navbar';
import Footer from './Footer';
import SchemaMarkup from './SchemaMarkup';
import { getWebSiteSchema } from '../utils/schemas';

export default function Layout({ children }) {
  return (
    <>
      <SchemaMarkup schema={getWebSiteSchema()} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
