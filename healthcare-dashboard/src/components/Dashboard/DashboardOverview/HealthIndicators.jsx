import { anatomyData } from '../../../data/healthData';


function HealthIndicators({icon, name}) {
  return (
    <div>
        <span>{icon}</span><span>{name}</span>
    </div>
  )
}

export default HealthIndicators