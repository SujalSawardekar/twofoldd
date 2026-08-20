import Button from '@/components/ui/Button';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>Ready to Build Your Next Stationery Range?</h2>
          <p className={styles.desc}>
            Talk to the Twofold team about products, specifications, MOQs, samples, and export requirements.
          </p>
          <div className={styles.actions}>
            <Button href="/contact-us" variant="white" hasArrow>Request a Quote</Button>
            <Button href="/contact-us" variant="outline-white">Talk to Our Export Team</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
