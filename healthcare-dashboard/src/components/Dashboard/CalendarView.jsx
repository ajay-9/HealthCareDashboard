import styles from './CalendarView.module.css';
import StaticAppointments from './StaticAppointments';
import { calendarData, days, dates } from '../../data/calendarData';

function CalendarView() {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>October 2021</h3>
        <div className={styles.navArrows}>
          <span>{'<'}</span>
          <span>{'>'}</span>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Row 1: Days */}
        {days.map((day, idx) => (
          <div key={`day-${idx}`} className={styles.headerCell}>
            {day}
          </div>
        ))}

        {/* Row 2: Dates */}
        {dates.map((date, idx) => (
          <div
            key={`date-${idx}`}
            className={`${styles.dateCell} ${date === '26' ? styles.selectedDay : ''}`}
          >
            {date}
          </div>
        ))}

        {/* Rows 3–5: Up to 3 time slots per day */}
        {[0, 1, 2].map((slotIdx) =>
          dates.map((date, idx) => {
            const time = calendarData[date]?.[slotIdx] || '';
            return (
              <div key={`${date}-slot-${slotIdx}`} className={styles.cell}>
                {time && <span className={styles.active}>{time}</span>}
              </div>
            );
          })
        )}
      </div>

      <StaticAppointments />
    </div>
  );
}

export default CalendarView;
