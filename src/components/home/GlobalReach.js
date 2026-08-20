import SectionLabel from '@/components/ui/SectionLabel';
import styles from './GlobalReach.module.css';

export default function GlobalReach() {
  const regions = [
    { name: 'North America', style: { top: '30%', left: '20%' } },
    { name: 'Latin America', style: { top: '65%', left: '30%' } },
    { name: 'United Kingdom', style: { top: '25%', left: '48%' } },
    { name: 'West Africa', style: { top: '55%', left: '47%' } },
    { name: 'Middle East', style: { top: '40%', left: '60%' } }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <SectionLabel>GLOBAL REACH</SectionLabel>
          </div>
          <h2 className={styles.headline}>Made in India. Shipped Worldwide.</h2>
        </div>
        
        <div className={styles.mapContainer}>
          <div className={styles.mapWrapper}>
            {/* Abstract World Map Representation */}
            <svg className={styles.mapSvg} viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="150" r="100" fill="rgba(255,255,255,0.02)" />
              <circle cx="300" cy="350" r="80" fill="rgba(255,255,255,0.02)" />
              <circle cx="500" cy="200" r="120" fill="rgba(255,255,255,0.02)" />
              <circle cx="650" cy="180" r="90" fill="rgba(255,255,255,0.02)" />
              <circle cx="800" cy="250" r="110" fill="rgba(255,255,255,0.02)" />
              <path d="M200 150 Q 350 250, 500 200 T 800 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
            </svg>
            
            {regions.map((region, idx) => (
              <div key={idx} className={styles.regionNode} style={region.style}>
                <div className={styles.dotWrapper}>
                  <div className={styles.pulse}></div>
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.regionLabel}>{region.name}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.mobileList}>
            {regions.map((region, idx) => (
              <div key={idx} className={styles.mobileListItem}>
                <div className={styles.mobileDot}></div>
                <span>{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
