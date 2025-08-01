import React from 'react';
import styles from './ChartCard.module.css';

const ChartCard = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`${styles.chartCard} ${className}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};

export default ChartCard;