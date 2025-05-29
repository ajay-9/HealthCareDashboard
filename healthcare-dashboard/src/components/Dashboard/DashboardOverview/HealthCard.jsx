import styles from './HealthCard.module.css';

function HealthCard({ name, date, status, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon} >{icon}</span>
        <h4>{name}</h4>
      </div>
      <p className={styles.date}>Date: {date}</p>
      <div className={styles.statusBarWrapper}>
        <div className={`${styles.statusBar} ${styles[status]}`}></div>
      </div>
    </div>
  );
}

export default HealthCard;
