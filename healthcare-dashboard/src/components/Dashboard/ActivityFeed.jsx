import styles from './ActivityFeed.module.css';

function ActivityFeed() {
  const data = [2, 4, 3, 6, 1, 3, 5];

  return (
    <div className={styles.container}>
      <h4>Activity</h4>
      <p>3 appointments this week</p>
      <div className={styles.chart}>
        {data.map((value, idx) => (
          <div key={idx} className={styles.barGroup}>
            <div
              className={styles.bar}
              style={{ height: `${value * 10 + 20}px` }}
            ></div>
            <span className={styles.dayLabel}>D{idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
