import React, { useState } from 'react';
import {
  Play,
  Pause,
  Download,
  Eye,
  Volume2,
  Heart,
  Frown,
  Meh,
  Smile
} from 'lucide-react';
import styles from './CallDetails.module.css';

const getSentimentIcon = (sentiment) => {
  switch (sentiment) {
    case 'positive':
      return <Smile className={styles.sentimentIconLarge} />;
    case 'negative':
      return <Frown className={styles.sentimentIconLarge} />;
    default:
      return <Meh className={styles.sentimentIconLarge} />;
  }
};

const getSentimentColor = (sentiment) => {
  switch (sentiment) {
    case 'positive':
      return styles.sentimentPositive;
    case 'negative':
      return styles.sentimentNegative;
    default:
      return styles.sentimentNeutral;
  }
};

export default function CallDetails({ call }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!call) {
    return (
      <div className={styles.emptyState}>
        <Eye className={styles.emptyIcon} />
        <p className={styles.emptyText}>Selecciona una llamada para ver los detalles</p>
      </div>
    );
  }

  return (
    <div className={styles.callDetails}>
      {/* Call Info Grid */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <label className={styles.label}>Número de Teléfono</label>
          <p className={styles.value}>{call.caller}</p>
        </div>
        <div className={styles.infoItem}>
          <label className={styles.label}>Agente IA</label>
          <p className={styles.value}>{call.agent}</p>
        </div>
        <div className={styles.infoItem}>
          <label className={styles.label}>Duración</label>
          <p className={styles.value}>{call.duration}</p>
        </div>
        <div className={styles.infoItem}>
          <label className={styles.label}>Intención</label>
          <p className={styles.value}>{call.intent}</p>
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div className={styles.section}>
        <label className={styles.sectionLabel}>Análisis de Sentimientos</label>
        <div className={styles.sentimentContainer}>
          <div className={`${styles.sentimentBadge} ${getSentimentColor(call.sentiment)}`}>
            {getSentimentIcon(call.sentiment)}
            <span className={styles.sentimentText}>{call.sentiment}</span>
          </div>
          {call.satisfaction && (
            <div className={styles.satisfactionContainer}>
              <Heart className={styles.heartIcon} />
              <span className={styles.satisfactionText}>{call.satisfaction}/5</span>
            </div>
          )}
        </div>
      </div>

      {/* Audio Player */}
      <div className={styles.section}>
        <label className={styles.sectionLabel}>Reproducción de Audio</label>
        <div className={styles.audioPlayer}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={styles.playButton}
          >
            {isPlaying ? <Pause className={styles.playIcon} /> : <Play className={styles.playIcon} />}
          </button>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '35%' }}></div>
            </div>
            <div className={styles.timeLabels}>
              <span>02:00</span>
              <span>{call.duration}</span>
            </div>
          </div>
          <button className={styles.controlButton}>
            <Volume2 className={styles.controlIcon} />
          </button>
          <button className={styles.controlButton}>
            <Download className={styles.controlIcon} />
          </button>
        </div>
      </div>

      {/* Transcript */}
      <div className={styles.section}>
        <label className={styles.sectionLabel}>Transcripción Automática</label>
        <div className={styles.transcript}>
          <pre className={styles.transcriptText}>
            {call.transcript}
          </pre>
        </div>
      </div>
    </div>
  );
}