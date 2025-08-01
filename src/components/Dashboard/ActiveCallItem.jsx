import React from 'react';
import { Zap } from 'lucide-react';
import styles from './ActiveCallItem.module.css';

const ActiveCallItem = ({ call }) => {
  return (
    <div className={styles.callItem}>
      <div className={styles.agentSection}>
        <div className={styles.agentIcon}>
          <Zap className={styles.icon} />
        </div>
        <div className={styles.agentInfo}>
          <p className={styles.agentName}>{call.agent}</p>
          <p className={styles.callerNumber}>{call.caller}</p>
        </div>
      </div>
      
      <div className={styles.durationSection}>
        <p className={styles.duration}>{call.duration}</p>
        <p className={styles.durationLabel}>Duración</p>
      </div>
      
      <div className={styles.intentSection}>
        <span className={styles.intentBadge}>
          {call.intent}
        </span>
        <p className={styles.intentLabel}>Intención detectada</p>
      </div>
    </div>
  );
};

export default ActiveCallItem;