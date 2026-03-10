import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.provizionledsigns.com';

export default function Breadcrumbs({ items }) {
  // items = [{ label: 'Home', path: '/' }, { label: 'LED Signs' }]
  // Last item has no path (current page)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.path ? { item: `${BASE_URL}${item.path}` } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav className="vc-breadcrumbs" aria-label="Breadcrumb">
        <ol className="vc-breadcrumbs__list">
          {items.map((item, i) => (
            <li key={i} className="vc-breadcrumbs__item">
              {item.path ? (
                <Link to={item.path} className="vc-breadcrumbs__link">{item.label}</Link>
              ) : (
                <span className="vc-breadcrumbs__current" aria-current="page">{item.label}</span>
              )}
              {i < items.length - 1 && <span className="vc-breadcrumbs__sep" aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
