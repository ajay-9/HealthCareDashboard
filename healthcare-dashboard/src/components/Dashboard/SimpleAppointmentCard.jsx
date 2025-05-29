import styles from './SimpleAppointmentCard.module.css';
import { FaSyringe, FaEye, FaHeart, FaUserMd } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

const icons = {
  'Health checkup complete': <FaSyringe />,
  Ophthalmologist: <FaEye />,
  Cardiologist: <FaHeart />,
  Neurologist: <GiBrain />,
  Default: <FaUserMd />,
};

function SimpleAppointmentCard({ title, time }) {
  const icon = icons[title] || icons.Default;

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.time}>{time}</p>
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}

export default SimpleAppointmentCard;
