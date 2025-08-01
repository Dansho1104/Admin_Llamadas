import React from 'react';
import { Heart, Settings } from 'lucide-react';
import styles from './BottomSection.module.css';

const BottomSection = () => {
  return (
    <div className={styles.bottomSection}>
      <button className={styles.bottomButton}>
        <Heart className={styles.bottomIcon} />
        Descubrir Gems
      </button>
      <button className={styles.bottomButton}>
        <Settings className={styles.bottomIcon} />
        Ajustes y ayuda
      </button>
    </div>
  );
};

export default BottomSection;