import React from 'react';
import styles from './RecentSection.module.css';

const RecentSection = ({ recentItems }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Reciente</h3>
      <ul className={styles.recentList}>
        {recentItems.map((item, index) => (
          <li key={index} className={styles.recentItem}>
            <button className={styles.recentButton}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSection;