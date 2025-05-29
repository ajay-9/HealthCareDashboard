import styles from './HealthIndicators.module.css';

function HealthIndicators({icon, label, position}) {
  return (
    <div className={`${styles.indicator} ${styles[position]}`}>
      <span className={styles.icon} >{icon}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default HealthIndicators