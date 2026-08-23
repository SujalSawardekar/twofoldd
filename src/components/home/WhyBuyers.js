import styles from './WhyBuyers.module.css';

export default function WhyBuyers() {
  const reasons = [
    {
      index: '01',
      title: 'Decade of Manufacturing & Export Experience',
      desc: 'Hands-on production know-how built over 10+ years serving international markets across four continents.',
    },
    {
      index: '02',
      title: 'Family Legacy Since 1988',
      desc: 'Three decades of accumulated trust, relationships, and deep expertise in the paper trade.',
    },
    {
      index: '03',
      title: 'AQL-Inspected Quality',
      desc: 'Every shipment is checked against Acceptable Quality Limit standards before it leaves our facility.',
    },
    {
      index: '04',
      title: 'Global Export Network',
      desc: 'Shipping worldwide through Nhava Sheva (JNPT), India\'s leading container port gateway.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.topRow}>
          <span className={styles.eyebrow}>Why Twofold</span>
          <h2 className={styles.headline}>Why Buyers Choose Twofold</h2>
        </div>

        <div className={styles.reasonsList}>
          {reasons.map((r) => (
            <div key={r.index} className={styles.row}>
              <span className={styles.idx}>{r.index}</span>
              <h3 className={styles.rowTitle}>{r.title}</h3>
              <p className={styles.rowDesc}>{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
