
import {useState, useEffect} from 'react';
import CountryList from './CountryList';


const Countries = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      setData(countries);
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
      <h2>All Countries - Data Fetched on Render</h2>
      <CountryList data={data} />
    </>
    
  )
}

export default Countries;