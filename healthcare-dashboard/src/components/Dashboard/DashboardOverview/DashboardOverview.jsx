import styles from './DashboardOverview.module.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from '../ActivityFeed';
import { FaChevronDown } from 'react-icons/fa';

function DashboardOverview() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2>Dashboard</h2>
        <span>This Week <FaChevronDown className={styles.dropdownIcon} /></span>
      </div>

      <div className={styles.topRow}>
        <AnatomySection className={styles.anatomyContainer}/>
        <HealthStatusCards className={styles.healthCards}/>
      </div>

      <div className={styles.bottomRow}>
        <ActivityFeed />
      </div>
    </section>
  );
}

export default DashboardOverview;
