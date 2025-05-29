import styles from './ActivityFeed.module.css';

function ActivityFeed() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h4>Activity</h4>
        <span>3 appointments on this week</span>
      </div>

      <div className={styles.chart}>
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.bar}></div>
            <span className={styles.dayLabel}>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
