import styles from './CalendarView.module.css';
import { calendarAppointments } from '../../data/calendarData';

function CalendarView() {
  return (
    <div className={styles.calendarContainer}>
      <h3 className={styles.title}>October 2021</h3>
      <div className={styles.grid}>
        {calendarAppointments.map((day, index) => (
          <div key={index} className={styles.day}>
            <span className={styles.dayLabel}>{day.date}</span>
            {day.times.map((time, idx) => (
              <div key={idx} className={styles.time}>{time}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
