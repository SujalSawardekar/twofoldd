import Link from 'next/link';
import styles from './Insights.module.css';

export default function Insights() {
  const articles = [
    {
      category:  'Manufacturing',
      title:     'How Notebooks Are Manufactured: Inside Our Palghar Facility',
      excerpt:   'A look at the production process behind every notebook we ship.',
      href:      '/blog/how-notebooks-are-manufactured',
    },
    {
      category:  'Sourcing Guide',
      title:     'Spiral vs Double Wire vs Glue Bound: Choosing the Right Notebook',
      excerpt:   'Understanding binding types to match your market requirements.',
      href:      '/blog/choosing-right-notebook',
    },
    {
      category:  'Quality',
      title:     'What Is AQL, and Why It Matters When Sourcing Stationery in Bulk',
      excerpt:   'How acceptance quality limits protect your import orders.',
      href:      '/blog/what-is-aql',
    },
  ];

  const [featured, ...rest] = articles;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Top row: label + CTA */}
        <div className={styles.topRow}>
          <div>
            <span className={styles.eyebrow}>Insights</span>
            <h2 className={styles.headline}>From the World of Paper.</h2>
          </div>
          <Link href="/blog" className={styles.allLink}>
            Explore All Insights →
          </Link>
        </div>

        {/* Editorial layout: featured (left) + two (right) */}
        <div className={styles.grid}>

          {/* Featured article */}
          <Link href={featured.href} className={styles.featured}>
            <div className={styles.featuredImage} aria-label={featured.title} />
            <div className={styles.featuredMeta}>
              <span className={styles.cat}>{featured.category}</span>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.excerpt}>{featured.excerpt}</p>
              <span className={styles.readLink}>Read Article →</span>
            </div>
          </Link>

          {/* Secondary articles */}
          <div className={styles.secondary}>
            {rest.map((a, i) => (
              <Link key={i} href={a.href} className={styles.secondaryItem}>
                <div className={styles.secondaryThumb} aria-label={a.title} />
                <div className={styles.secondaryText}>
                  <span className={styles.cat}>{a.category}</span>
                  <h3 className={styles.secondaryTitle}>{a.title}</h3>
                  <span className={styles.readLink}>Read →</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
