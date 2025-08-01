import React from 'react';
import { TrendingUp } from 'lucide-react';
import styles from './KPICard.module.css';

const KPICard = ({ kpi }) => {
  const Icon = kpi.icon;
  
  return (
    <div className={styles.kpiCard}>
      <div className={styles.cardContent}>
        <div className={styles.textSection}>
          <p className={styles.title}>{kpi.title}</p>
          <p className={styles.value}>{kpi.value}</p>
          <div className={styles.changeSection}>
            <TrendingUp className={styles.trendIcon} />
            <span className={styles.changeValue}>{kpi.change}</span>
            <span className={styles.changeLabel}>vs mes anterior</span>
          </div>
        </div>
        <div className={`${styles.iconContainer} ${styles[kpi.colorClass]}`}>
          <Icon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default KPICard;