import React, {useState} from 'react';

const SensorProfile = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [threshold, setThreshold] = useState('');
  const [notificationNumber, setNotificationNumber] = useState('');

  return (
    <div>
      <form>
        <label for='name'>Sensor Name: </label>
        <input type="text" id='name' value={name} onChange={event => setName(event.target.value)}></input>
        <br />
        <label for='location'>Sensor Location: </label>
        <input type="text" id='location' value={location} onChange={event => setLocation(event.target.value)}></input>
        <br />
        <label for='threshold'>Temperature Threshold: </label>
        <input type="number" id='threshold' step="0.01" value={threshold} onChange={event => setThreshold(event.target.value)}></input>
        <br />
        <label for='number'>Notification Number: </label>
        <input type="text" id='number' value={notificationNumber} onChange={event => setNotificationNumber(event.target.value)}></input>
        <br />
      </form>
    </div>
  );
}

export default SensorProfile;
