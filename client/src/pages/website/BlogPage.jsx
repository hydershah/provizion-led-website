import { Link } from 'react-router-dom';
import { HiArrowRight, HiCalendar, HiTag } from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import useSanityQuery from '../../hooks/useSanityQuery';
import { blogPostsQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import './shared.css';

export default function BlogPage() {
  useThemeClass('theme-site');
  const { data: posts, loading } = useSanityQuery(blogPostsQuery, {}, []);

  return (
    <>
      <SEO
        title="Blog | LED Signage Insights & News"
        description="LED signage tips, digital display insights, and industry news from ProVizion LED."
        path="/blog"
      />

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
                  <Link to={`/blog/${post.slug.current}`} className="vc-blog-card">
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
        </div>
      </section>
    </>
  );
}
