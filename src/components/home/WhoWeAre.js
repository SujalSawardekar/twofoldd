import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import styles from './WhoWeAre.module.css';

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.textContent}>
            <SectionLabel>TWOFOLD / OUR STORY</SectionLabel>
            <h2 className={styles.headline}>A Manufacturer, Not Just a Supplier.</h2>
            <p className={styles.copy}>
              At Twofold, we manufacture and export paper stationery to distributors, wholesalers and importers across the globe — combining hands-on production experience with the scale that high-volume export orders demand.
            </p>
            <Button href="/about-us" variant="ghost" hasArrow>Read Our Story</Button>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span>Factory Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
