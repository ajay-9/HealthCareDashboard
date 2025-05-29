import styles from './AnatomySection.module.css';
import { anatomyData } from '../../../data/healthData';
import bodyImage from '../../../assets/body.png';
import HealthIndicators from './HealthIndicators';


function AnatomySection() {
  return (
    <div className={styles.container}>
      <img src={bodyImage} alt="Body Illustration" className={styles.bodyImage} />
      {anatomyData.map((item, idx) => (
        <HealthIndicators icon = {anatomyData.stausIcon} label={anatomyData.label}/>
      ))}
      
    </div>
  );
}

export default AnatomySection;
