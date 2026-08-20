'use client';

import { useRef, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import styles from './ProductRange.module.css';

export default function ProductRange() {
  const products = [
    { name: 'Exercise Books', desc: 'Durable staple-bound notebooks designed for schools and institutions.' },
    { name: 'Spiral Bound', desc: 'Wire-coil binding for smooth, practical writing experience.' },
    { name: 'Double Wire Bound', desc: 'Twin-loop wire binding for a clean, professional finish.' },
    { name: 'Hard Cover Gally Bound', desc: 'Rigid cover notebooks with premium gally binding.' },
    { name: 'Centre Stitched', desc: 'Saddle-stitched notebooks for lightweight, everyday use.' },
    { name: 'Glue Bound', desc: 'Perfect-bound notebooks with clean, seamless spine.' }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel>OUR PRODUCTS</SectionLabel>
            <h2 className={styles.headline}>Paper Products. Built for Every Market.</h2>
          </div>
          <div className={styles.ctaWrapper}>
            <Button href="/products" variant="outline" hasArrow>View All Products</Button>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollWrapper}>
        <div className={styles.track}>
          {products.map((product, idx) => (
            <div key={idx} className={styles.cardWrapper}>
              <ProductCard 
                index={idx + 1}
                name={product.name}
                description={product.desc}
                imageSrc="/images/products/placeholder.jpg"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.mobileCta}>
        <div className="container">
          <Button href="/products" variant="outline" hasArrow className={styles.mobileBtn}>View All Products</Button>
        </div>
      </div>
    </section>
  );
}
