import StatCard from '@/components/ui/StatCard';
import styles from './TrustMetrics.module.css';

export default function TrustMetrics() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <StatCard number="10+" label="Years Manufacturing & Export Experience" />
          </div>
          <div className={styles.gridItem}>
            <StatCard number="Since 1988" label="Paper Trade Heritage" />
          </div>
          <div className={styles.gridItem}>
            <StatCard number="AQL" label="Quality Inspected Before Dispatch" />
          </div>
          <div className={styles.gridItem}>
            <StatCard number="Global" label="Worldwide Export Reach" />
          </div>
        </div>
      </div>
    </section>
  );
}
