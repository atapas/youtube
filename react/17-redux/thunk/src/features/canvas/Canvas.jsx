import React from 'react';

import Color from './Color';
import Font from './Font';
import styles from './Canvas.module.css';

export default function Canvas() {
  return(
    <div className={styles.canvas}>
      <Color />
      <Font />
    </div>
  )
}