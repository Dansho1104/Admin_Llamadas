import React from 'react';
import styles from './AgentPerformanceItem.module.css';

const AgentPerformanceItem = ({ agent }) => {
  return (
    <div className={styles.agentItem}>
      <div className={styles.agentHeader}>
        <h4 className={styles.agentName}>{agent.agent}</h4>
        <span className={styles.callsCount}>{agent.calls} llamadas</span>
      </div>
      <div className={styles.metricsGrid}>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Satisfacción</p>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div 
                className={`${styles.progressFill} ${styles.progressSatisfaction}`}
                style={{ width: `${(agent.satisfaction / 5) * 100}%` }}
              ></div>
            </div>
            <span className={styles.metricValue}>{agent.satisfaction}/5</span>
          </div>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Duración Promedio</p>
          <p className={styles.metricValue}>{agent.avgDuration} min</p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Eficiencia</p>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div 
                className={`${styles.progressFill} ${styles.progressEfficiency}`}
                style={{ width: `${agent.efficiency}%` }}
              ></div>
            </div>
            <span className={styles.metricValue}>{agent.efficiency}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPerformanceItem;