import CurrentTemp from './components/CurrentTemp';
import TempListing from './components/TempListing';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Temperature Monitor</h1>
      <CurrentTemp />
      <TempListing />
    </div>
  );
}

export default App;
