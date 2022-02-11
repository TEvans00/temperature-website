import { Link } from 'react-router-dom';

import CurrentTemp from './components/CurrentTemp';
import TempListing from './components/TempListing';

import './styles.css';

function App() {
  return (
    <div>
      <p className="sensor-profile-link"><Link to="/sensor">Sensor Profile</Link></p>
      <h1>Temperature Monitor</h1>
      <CurrentTemp />
      <TempListing />
    </div>
  );
}

export default App;
