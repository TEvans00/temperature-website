import { Link } from 'react-router-dom';

import SensorProfile from '../components/SensorProfie';

const SensorProfileScreen = () => {
  return (
    <div>
      <p className='navigation-link'><Link to='/'>Temperature Monitor</Link></p>
      <h1>Sensor Profile</h1>
      <SensorProfile />
    </div>
  );
}

export default SensorProfileScreen;
