import SectionLabel from '@/components/ui/SectionLabel';
import styles from './WhyBuyers.module.css';

export default function WhyBuyers() {
  const cards = [
    {
      title: 'Manufacturing Experience',
      desc: 'Hands-on production and export know-how built over 10+ years.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_mfg)">
            <path d="M0.5 4.5H13.5V13C13.5 13.1326 13.4473 13.2598 13.3536 13.3536C13.2598 13.4473 13.1326 13.5 13 13.5H1C0.867392 13.5 0.740215 13.4473 0.646447 13.3536C0.552678 13.2598 0.5 13.1326 0.5 13V4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.5 4.5C0.5 3.43913 0.921427 2.42172 1.67157 1.67157C2.42172 0.921427 3.43913 0.5 4.5 0.5H9.5C10.5609 0.5 11.5783 0.921427 12.3284 1.67157C13.0786 2.42172 13.5 3.43913 13.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 13.5V8C11 7.86739 10.9473 7.74021 10.8536 7.64645C10.7598 7.55268 10.6326 7.5 10.5 7.5H3.5C3.36739 7.5 3.24021 7.55268 3.14645 7.64645C3.05268 7.74021 3 7.86739 3 8V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 9.5H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11.5H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_mfg">
              <rect width="14" height="14" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: 'Family Heritage',
      desc: 'Three decades of accumulated trust and relationships in the paper trade.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_heritage)">
            <path d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 4.5V7L9.54 9.96" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_heritage">
              <rect width="14" height="14" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: 'AQL Quality Assurance',
      desc: 'Every shipment is checked against defined quality standards before dispatch.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_quality)">
            <path d="M7.36 13.43C7.12833 13.5194 6.87168 13.5194 6.64 13.43V13.43C4.83227 12.736 3.2776 11.5099 2.18135 9.91372C1.08509 8.31755 0.498829 6.42637 0.500002 4.48999V1.48999C0.500002 1.22477 0.605359 0.97042 0.792895 0.782883C0.980431 0.595347 1.23479 0.48999 1.5 0.48999H12.5C12.7652 0.48999 13.0196 0.595347 13.2071 0.782883C13.3946 0.97042 13.5 1.22477 13.5 1.48999V4.48999C13.5012 6.42637 12.9149 8.31755 11.8187 9.91372C10.7224 11.5099 9.16773 12.736 7.36 13.43V13.43Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_quality">
              <rect width="14" height="14" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: 'Global Export Network',
      desc: 'Export-ready operations connected to international markets through JNPT.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_export)">
            <path d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 9.50007H2.75C3.21413 9.50007 3.65925 9.31569 3.98744 8.98751C4.31563 8.65932 4.5 8.2142 4.5 7.75007V6.25007C4.5 5.78594 4.68437 5.34082 5.01256 5.01263C5.34075 4.68444 5.78587 4.50007 6.25 4.50007C6.71413 4.50007 7.15925 4.31569 7.48744 3.98751C7.81563 3.65932 8 3.2142 8 2.75007V0.570068" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 6.9C12.9993 6.64021 12.4441 6.50311 11.88 6.5H9.75C9.28587 6.5 8.84075 6.68437 8.51256 7.01256C8.18437 7.34075 8 7.78587 8 8.25C8 8.71413 8.18437 9.15925 8.51256 9.48744C8.84075 9.81563 9.28587 10 9.75 10C10.0815 10 10.3995 10.1317 10.6339 10.3661C10.8683 10.6005 11 10.9185 11 11.25V12.12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_export">
              <rect width="14" height="14" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>WHY TWOFOLD</SectionLabel>
          <h2 className={styles.headline}>Why Buyers Choose Twofold</h2>
        </div>
        
        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
