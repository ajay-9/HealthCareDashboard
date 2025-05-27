import styles from './UpcomingSchedule.module.css';
import { upcomingAppointments } from '../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

function UpcomingSchedule() {
  const grouped = {
    Thursday: upcomingAppointments.filter(app => app.day === 'Thursday'),
    Saturday: upcomingAppointments.filter(app => app.day === 'Saturday'),
  };

  return (
    <section className={styles.schedule}>
      <h3>The Upcoming Schedule</h3>
      {Object.entries(grouped).map(([day, appointments], index) => (
        <div key={index} className={styles.dayGroup}>
          <h4>On {day}</h4>
          <div className={styles.cards}>
            {appointments.map((item, idx) => (
              <SimpleAppointmentCard key={idx} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;
