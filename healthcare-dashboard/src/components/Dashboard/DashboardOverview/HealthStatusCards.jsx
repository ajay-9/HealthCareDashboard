import styles from './HealthStatusCards.module.css';
import { healthCards } from '../../../data/healthData';

function HealthStatusCards() {
  return (
    <div className={styles.cards}>
      {healthCards.map((card, index) => (
        <div key={index} className={styles.card}>
          <h4>{card.name}</h4>
          <p>{card.date}</p>
          <span className={`${styles.status} ${styles[card.status]}`}>{card.status}</span>
        </div>
      ))}
      <div>Details</div>
    </div>
  );
}

export default HealthStatusCards;
