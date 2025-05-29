import styles from './CalendarView.module.css';
import { FaTooth } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';

function StaticAppointments() {
  return (
    <div className={styles.appointmentCards}>
      <div className={styles.card + ' ' + styles.dentist}>
        <div>
          <h4>Dentist</h4>
          <p>09:00–11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <FaTooth size={24} />
      </div>

      <div className={styles.card + ' ' + styles.physio}>
        <div>
          <h4>Physiotherapy Appointment</h4>
          <p>11:00–12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
        <GiMuscleUp size={24} />
      </div>
    </div>
  );
}

export default StaticAppointments;
