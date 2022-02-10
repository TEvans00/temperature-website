import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { timestampToDate, timestampToTime } from '../util/timestampTransformation';

import config from '../config';

import '../styles.css'

const TempListing = () => {
  const [temps, setTemps] = useState([]);
  const [violations, setViolations] = useState([]);
  
  const getViolations = async () => {
    const violationsResponse = await axios.get(`${config.QUERY_URL}/temperature_store/threshold_violations`);
    const violations = violationsResponse.data || [];
    console.log(violations);
    setViolations(violations);
  };

  const getTemperatures = async () => {
    const temperaturesResponse = await axios.get(`${config.QUERY_URL}/temperature_store/temperatures`);
    const temperatures = temperaturesResponse.data || [];
    console.log(temperatures);
    temperatures.reverse();
    setTemps(temperatures);
  };

  useEffect(() => {
    getViolations();
    getTemperatures();

    const interval=setInterval(()=>{
      getViolations();
      getTemperatures();
    },30000)
       
    return()=>clearInterval(interval)
  }, []);

  return (
    <div>
      {temps.map((temp) => (
        <p
          key={temp.time}
          className={`temperature-listing ${violations.some((violation) => violation.temp === temp.temp && violation.time === temp.time) ? 'violation' : ''}`}>
            Temperature: {temp.temp}&#176;F Time: {`${timestampToDate(temp.time)} ${timestampToTime(temp.time)}`}
        </p>
      ))}
    </div>
  );
}

export default TempListing;
