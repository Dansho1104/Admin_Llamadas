import React from 'react';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import styles from './AnalyticsKPICard.module.css';

const AnalyticsKPICard = ({ kpi }) => {
  const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
  
  return (
    <div className={styles.kpiCard}>
      <div className={styles.cardContent}>
        <div className={styles.textSection}>
          <p className={styles.title}>{kpi.title}</p>
          <p className={styles.value}>{kpi.value}</p>
          <div className={styles.changeSection}>
            <TrendIcon className={`${styles.trendIcon} ${kpi.trend === 'up' ? styles.trendUp : styles.trendDown}`} />
            <span className={`${styles.change} ${kpi.trend === 'up' ? styles.changePositive : styles.changeNegative}`}>
              {kpi.change}
            </span>
            <span className={styles.changeLabel}>vs período anterior</span>
          </div>
        </div>
        <div className={`${styles.iconContainer} ${styles[`icon${kpi.color.charAt(0).toUpperCase() + kpi.color.slice(1)}`]}`}>
          <BarChart3 className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsKPICard;