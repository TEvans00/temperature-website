import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import config from '../config';

import 'react-toastify/dist/ReactToastify.css';

const SensorProfile = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [threshold, setThreshold] = useState('');
  const [notificationNumber, setNotificationNumber] = useState('');

  const getProfile = async () => {
    const profileResponse = await axios.get(`${config.QUERY_URL}/sensor_profile/profile`);
    const profile = profileResponse.data || {};
    setName(profile.name || '');
    setLocation(profile.location || '');
    setThreshold(profile.temperature_threshold || '');
    setNotificationNumber(profile.notification_number || '');
  };

  const saveChanges = (event) => {
    event.preventDefault();
    axios.post(`${config.EVENT_URL}/sensor/profile_updated`, {name, location, temperature_threshold: threshold, notification_number: notificationNumber});
    toast('Profile updated!', {type: 'success'});
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <form onSubmit={saveChanges} >
        <label htmlFor='name'>Sensor Name: </label>
        <input type="text" id='name' value={name} onChange={event => setName(event.target.value)}></input>
        <br />
        <label htmlFor='location'>Sensor Location: </label>
        <input type="text" id='location' value={location} onChange={event => setLocation(event.target.value)}></input>
        <br />
        <label htmlFor='threshold'>Temperature Threshold: </label>
        <input type="number" id='threshold' step="0.01" value={threshold} onChange={event => setThreshold(event.target.value)}></input>
        <br />
        <label htmlFor='number'>Notification Number: </label>
        <input type="text" id='number' value={notificationNumber} onChange={event => setNotificationNumber(event.target.value)}></input>
        <br />
        <input type="submit" value="Update"></input>
      </form>
      <ToastContainer
        position='bottom-center'
        hideProgressBar
        autoClose={3000}
      />
    </div>
  );
}

export default SensorProfile;
