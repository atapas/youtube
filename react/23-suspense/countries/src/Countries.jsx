
import {useState, useEffect} from 'react';
import CountryList from './CountryList';
import Time from './Time';

async function fetchCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  return countries;
}

async function fetchTime() {
  const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  const time = await response.json();
  return time;
}

async function fetchAllData() {
  const countries = await fetchCountries();
  const time = await fetchTime();
  const promises =  await Promise.allSettled([countries, time]);
  return promises;
}

const dataPromises = fetchAllData();

const Countries = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const data = await fetchAllData();
      setData(data[0].value);
      setTime(data[1].value);
      
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading){
    return(
      <div>Loading Countries and Time...</div>
    )
  }

  return(
    <>
      <h2>All Countries with the Current Time - Date Fetched and then Rendered</h2>
      <Time data={time} />
      <CountryList data={data} />
    </>
    
  )
}

export default Countries;