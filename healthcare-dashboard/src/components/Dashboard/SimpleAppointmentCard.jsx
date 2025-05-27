import styles from './SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.info}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
