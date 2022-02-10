import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { timestampToDate, timestampToTime } from '../util/timestampTransformation';

import config from '../config';

const CurrentTemp = () => {
  const [temp, setTemp] = useState(undefined);
  
  const getLatestTemp = async () => {
    const temperaturesResponse = await axios.get(`${config.QUERY_URL}/temperature_store/temperatures`);
    const temperatures = temperaturesResponse.data || [];
    console.log(temperatures);
    temperatures.reverse();
    setTemp(temperatures[0]);
  };

  useEffect(() => {
    getLatestTemp();

    const interval=setInterval(()=>{
      getLatestTemp();
    },30000)
       
    return()=>clearInterval(interval)
  }, []);

  return (
    <div>
      {temp &&
        <div>
          <p className='current-temp'>{temp.temp}&#176;F</p>
          <p className='last-updated'>Last updated {timestampToDate(temp.time)} {timestampToTime(temp.time)}</p>
        </div>
      }  
    </div>
  );
}

export default CurrentTemp;
