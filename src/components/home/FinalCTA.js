import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.layout}>

          {/* Left: large typographic statement */}
          <div className={styles.left}>
            <h2 className={styles.headline}>
              Ready to source<br />
              with a manufacturer<br />
              <em>you can rely on?</em>
            </h2>
          </div>

          {/* Right: sub-copy + CTA */}
          <div className={styles.right}>
            <p className={styles.copy}>
              Request a quote and our export team will respond with 
              pricing, MOQs, and lead times.
            </p>
            <Link href="/contact-us" className={styles.cta}>
              Request a Quote →
            </Link>
          </div>

        </div>

        {/* Bottom wordmark */}
        <div className={styles.wordmark} aria-hidden="true">Twofold</div>

      </div>
    </section>
  );
}
