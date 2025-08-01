import React from 'react';
import {
  Phone,
  User,
  Clock,
  MessageSquare,
  Heart,
  Frown,
  Meh,
  Smile
} from 'lucide-react';
import styles from './CallItem.module.css';

const getSentimentIcon = (sentiment) => {
  switch (sentiment) {
    case 'positive':
      return <Smile className={styles.sentimentIcon} />;
    case 'negative':
      return <Frown className={styles.sentimentIcon} />;
    default:
      return <Meh className={styles.sentimentIcon} />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'active':
      return styles.statusActive;
    case 'completed':
      return styles.statusCompleted;
    case 'failed':
      return styles.statusFailed;
    default:
      return styles.statusDefault;
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 'active':
      return 'Activa';
    case 'completed':
      return 'Completada';
    case 'failed':
      return 'Fallida';
    default:
      return 'Desconocido';
  }
};

export default function CallItem({ call, isSelected, onClick }) {
  return (
    <div
      onClick={() => onClick(call)}
      className={`${styles.callItem} ${isSelected ? styles.selected : ''}`}
    >
      <div className={styles.header}>
        <div className={styles.callerInfo}>
          <Phone className={styles.phoneIcon} />
          <span className={styles.callerNumber}>{call.caller}</span>
        </div>
        <span className={`${styles.status} ${getStatusColor(call.status)}`}>
          {getStatusText(call.status)}
        </span>
      </div>
      
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <User className={styles.detailIcon} />
          <span>{call.agent}</span>
        </div>
        <div className={styles.detailItem}>
          <Clock className={styles.detailIcon} />
          <span>{call.duration}</span>
        </div>
        <div className={styles.detailItem}>
          {getSentimentIcon(call.sentiment)}
          <span className={styles.sentimentText}>{call.sentiment}</span>
        </div>
        <div className={styles.detailItem}>
          <MessageSquare className={styles.detailIcon} />
          <span>{call.intent}</span>
        </div>
      </div>
      
      {call.satisfaction && (
        <div className={styles.satisfaction}>
          <Heart className={styles.heartIcon} />
          <span>Satisfacción: {call.satisfaction}/5</span>
        </div>
      )}
    </div>
  );
}