import SectionLabel from '@/components/ui/SectionLabel';
import styles from './WhoWeServe.module.css';

export default function WhoWeServe() {
  const items = [
    { num: '01', title: 'Importers & Traders', desc: 'Bulk volume supply with reliable consistency.' },
    { num: '02', title: 'Chain Stores', desc: 'Retail-ready products tailored for your shelves.' },
    { num: '03', title: 'Stationery Brands', desc: 'Private label manufacturing to your specifications.' },
    { num: '04', title: 'Educational Institutes', desc: 'Direct supply of customized notebooks and diaries.' }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>WHO WE SERVE</SectionLabel>
          <h2 className={styles.headline}>Built for Buyers Who Need a Manufacturing Partner.</h2>
        </div>
        
        <div className={styles.row}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.number}>{item.num}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
