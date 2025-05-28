import CalendarView from './Dashboard/CalendarView';
import DashboardOverview from './Dashboard/DashBoardOverview/DashboardOverview';
import styles from './DashboardMainContent.module.css';
import UpcomingSchedule from './Dashboard/UpcomingSchedule';


function DashboardMainContent() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <DashboardOverview />
      </div>
      <div className={styles.rightPanel}>
          <CalendarView />
          <UpcomingSchedule />
        </div>
    </div>
  );
}

export default DashboardMainContent;
