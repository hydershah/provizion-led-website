import { Link } from 'react-router-dom';
import { HiArrowRight, HiCalendar, HiTag, HiPhone } from 'react-icons/hi';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import { COMPANY } from '../../utils/constants';
import { trackPhoneClick } from '../../utils/analytics';
import useThemeClass from '../../hooks/useThemeClass';
import useSanityQuery from '../../hooks/useSanityQuery';
import { blogPostsQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import './shared.css';

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'ProVizion LED Blog — LED Signage Insights & News',
  description: 'LED signage tips, digital display buying guides, and industry news from ProVizion LED in Charlotte, NC.',
  url: 'https://www.provizionledsigns.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'ProVizion LED',
    url: 'https://www.provizionledsigns.com',
  },
};

export default function BlogPage() {
  useThemeClass('theme-site');
  const { data: posts, loading } = useSanityQuery(blogPostsQuery, {}, []);

  return (
    <>
      <SEO
        title="Blog | LED Signage Insights & News"
        description="LED signage tips, digital display buying guides, and industry news from ProVizion LED — Charlotte NC's trusted sign manufacturer. Expert advice on choosing the right signs."
        path="/blog"
      />
      <SchemaMarkup schema={blogCollectionSchema} />

      {/* ── Hero ── */}
      <section className="vc-blog-listing-hero">
        <div className="vc-blog-listing-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Blog</span>
            <h1 className="vc-page-hero__title">Insights &amp; News</h1>
            <p className="vc-blog-listing-hero__sub">
              LED signage tips, digital display insights, and industry updates.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Post Listing ── */}
      <section className="vc-section">
        <div className="vc-container">
          {loading ? (
            <p className="vc-blog-empty">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="vc-blog-empty">No posts yet. Check back soon!</p>
          ) : (
            <StaggerWrap className="vc-blog-grid">
              {posts.map((post) => (
                <StaggerChild key={post._id}>
                  <Link to={`/blog/${typeof post.slug === 'string' ? post.slug : post.slug?.current}`} className="vc-blog-card">
                    {post.featuredImage && (
                      <div className="vc-blog-card__img">
                        <img
                          src={urlFor(post.featuredImage).width(600).height(340).url()}
                          alt={post.title}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="vc-blog-card__body">
                      <div className="vc-blog-card__meta">
                        {post.category && (
                          <span className="vc-blog-card__cat">
                            <HiTag /> {post.category.title}
                          </span>
                        )}
                        {post.publishedAt && (
                          <span className="vc-blog-card__date">
                            <HiCalendar />{' '}
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
                      <h3 className="vc-blog-card__title">{post.title}</h3>
                      {post.excerpt && (
                        <p className="vc-blog-card__excerpt">{post.excerpt}</p>
                      )}
                      <span className="vc-blog-card__link">
                        Read More <HiArrowRight />
                      </span>
                    </div>
                  </Link>
                </StaggerChild>
              ))}
            </StaggerWrap>
          )}

          {/* ── CTA ── */}
          <FadeUp className="vc-phone-cta" style={{ marginTop: '48px' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-white)', marginBottom: '12px' }}>
              Ready for a Custom LED Sign?
            </h2>
            <p>Call ProVizion LED today at{' '}
              <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('blog-listing-cta')}>
                {COMPANY.phone}
              </a>{' '}or request a free quote online.
            </p>
            <Link to="/contact-us" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Get A Free Quote <HiArrowRight />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
