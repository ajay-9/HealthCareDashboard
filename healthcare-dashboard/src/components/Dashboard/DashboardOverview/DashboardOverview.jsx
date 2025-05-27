import styles from './DashboardOverview.module.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from '../ActivityFeed';

function DashboardOverview() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2>Dashboard</h2>
        <span>This Week</span>
      </div>

      <div className={styles.topRow}>
        <AnatomySection />
        <HealthStatusCards />
      </div>

      <div className={styles.bottomRow}>
        <ActivityFeed />
      </div>
    </section>
  );
}

export default DashboardOverview;
