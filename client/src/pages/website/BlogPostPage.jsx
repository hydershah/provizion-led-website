import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { HiArrowLeft, HiCalendar, HiUser, HiTag } from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import useSanityQuery from '../../hooks/useSanityQuery';
import { blogPostBySlugQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { FadeUp } from './animations';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getBlogPostSchema } from '../../utils/schemas';
import './shared.css';

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="vc-blog-article__figure">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          loading="lazy"
        />
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="vc-blog-article__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="vc-blog-article__h3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="vc-blog-article__quote">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="vc-blog-article__link"
      >
        {children}
      </a>
    ),
  },
};

export default function BlogPostPage() {
  useThemeClass('theme-site');
  const { slug } = useParams();
  const { data: post, loading } = useSanityQuery(
    blogPostBySlugQuery,
    { slug },
    null
  );

  if (loading) {
    return (
      <section className="vc-section">
        <div className="vc-container">
          <p className="vc-blog-empty">Loading...</p>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="vc-section">
        <div className="vc-container">
          <p className="vc-blog-empty">Post not found.</p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/blog" className="vc-btn vc-btn--accent vc-btn--sm">
              <HiArrowLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const blogSchema = getBlogPostSchema({
    title: post.title,
    excerpt: post.excerpt || post.metaDescription || '',
    slug: typeof post.slug === 'string' ? post.slug : post.slug?.current,
    publishedAt: post.publishedAt,
    author: post.author,
    featuredImageUrl: post.featuredImage ? urlFor(post.featuredImage).width(1200).url() : null,
  });

  return (
    <>
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt || ''}
        path={`/blog/${typeof post.slug === 'string' ? post.slug : post.slug?.current}`}
      />
      <SchemaMarkup schema={blogSchema} />
      <Breadcrumbs items={[
        { label: 'Home', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: post.title },
      ]} />

      {/* ── Article Hero ── */}
      <section
        className={`vc-blog-hero${post.featuredImage ? '' : ' vc-blog-hero--no-img'}`}
      >
        {post.featuredImage && (
          <div className="vc-blog-hero__bg">
            <img
              src={urlFor(post.featuredImage).width(1400).url()}
              alt={post.title}
            />
            <div className="vc-page-hero__overlay" />
          </div>
        )}
        <div className="vc-blog-hero__content">
          <FadeUp>
            <Link to="/blog" className="vc-blog-hero__back">
              <HiArrowLeft /> Back to Blog
            </Link>
            {post.category && (
              <span className="vc-section-label">{post.category.title}</span>
            )}
            <h1 className="vc-page-hero__title">{post.title}</h1>
            <div className="vc-blog-hero__meta">
              {post.author && (
                <span>
                  <HiUser /> {post.author}
                </span>
              )}
              {formattedDate && (
                <span>
                  <HiCalendar /> {formattedDate}
                </span>
              )}
              {post.category && (
                <span>
                  <HiTag /> {post.category.title}
                </span>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="vc-section">
        <div className="vc-container">
          <article className="vc-blog-article">
            {post.body && post.body.length > 0 ? (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            ) : (
              <p>No content available.</p>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
