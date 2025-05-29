import styles from "./AnatomySection.module.css";
import { anatomyData } from "../../../data/healthData.jsx";
import bodyImage from "../../../assets/body.png";
import HealthIndicators from "./HealthIndicators";

function AnatomySection() {
  return (
    <div className={styles.container}>
      <img src={bodyImage} alt="Body" className={styles.bodyImage} />
      {anatomyData.map((item, idx) => (
        <HealthIndicators
          key={idx}
          icon={item.statusIcon}
          label={item.label}
          position={item.position}
        />
      ))}
    </div>
  );
}

export default AnatomySection;
