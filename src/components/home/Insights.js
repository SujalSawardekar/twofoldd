import ArticleCard from '@/components/ui/ArticleCard';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import styles from './Insights.module.css';

export default function Insights() {
  const articles = [
    {
      category: 'Manufacturing',
      title: 'How Notebooks Are Manufactured: Inside Our Palghar Facility',
      excerpt: 'A look at the production process behind every notebook we ship.',
      imageSrc: '/images/blog/placeholder-1.jpg',
      href: '/blog/how-notebooks-are-manufactured'
    },
    {
      category: 'Sourcing Guide',
      title: 'Spiral vs Double Wire vs Glue Bound: Choosing the Right Notebook',
      excerpt: 'Understanding binding types to match your market requirements.',
      imageSrc: '/images/blog/placeholder-2.jpg',
      href: '/blog/choosing-right-notebook'
    },
    {
      category: 'Quality',
      title: 'What Is AQL, and Why It Matters When Sourcing Stationery in Bulk',
      excerpt: 'How acceptance quality limits protect your import orders.',
      imageSrc: '/images/blog/placeholder-3.jpg',
      href: '/blog/what-is-aql'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel>INSIGHTS</SectionLabel>
            <h2 className={styles.headline}>From the World of Paper.</h2>
          </div>
          <div className={styles.ctaDesktop}>
            <Button href="/blog" variant="ghost" hasArrow>Explore Insights</Button>
          </div>
        </div>
        
        <div className={styles.grid}>
          {articles.map((article, idx) => (
            <ArticleCard 
              key={idx}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              imageSrc={article.imageSrc}
              href={article.href}
            />
          ))}
        </div>
        
        <div className={styles.ctaMobile}>
          <Button href="/blog" variant="outline" hasArrow className={styles.fullBtn}>Explore Insights</Button>
        </div>
      </div>
    </section>
  );
}
