import styles from './HealthStatusCards.module.css';
import { healthCards } from '../../../data/healthData.jsx';
import HealthCard from './HealthCard';
import { FaArrowRight } from 'react-icons/fa';

function HealthStatusCards() {
  console.log(healthCards);

  return (
    <div className={styles.cards}>
      {healthCards.map((card, index) => (
        <HealthCard
          key={index}
          name={card.name}
          date={card.date}
          status={card.status}
          icon={card.icon}
        />
      ))}
      <div className={styles.details}>Details <FaArrowRight className={styles.arrow}/></div>
    </div>
  );
}

export default HealthStatusCards;
