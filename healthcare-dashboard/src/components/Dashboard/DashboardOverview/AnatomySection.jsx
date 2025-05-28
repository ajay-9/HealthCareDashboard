import styles from './AnatomySection.module.css';
import { anatomyData } from '../../../data/healthData';
import bodyImage from '../../../assets/body.png';

<img src={bodyImage} alt="Body Illustration" className={styles.bodyImage} />


function AnatomySection() {
  return (
    <div className={styles.container}>
      <img src={bodyImage} alt="Body Illustration" className={styles.bodyImage} />
      {anatomyData.map((item, index) => (
        <div key={index} className={`${styles.indicator} ${styles[item.position]}`}>
          <span className={styles.status}>{item.statusIcon}</span> {item.label}
        </div>
      ))}
    </div>
  );
}

export default AnatomySection;
