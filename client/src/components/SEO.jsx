import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'ProVizion LED';
const BASE_URL = 'https://www.provizionledsigns.com';

export default function SEO({
  title,
  description,
  path = '/',
  keywords,
  type = 'website',
  image = '/images/provizion-og-image.jpg',
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | LED & Digital Sign Manufacturer - Charlotte, NC`;
  const url = `${BASE_URL}${path}`;
  const imageUrl = `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
