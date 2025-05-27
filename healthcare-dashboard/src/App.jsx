import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appLayout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.mainContent}>
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
