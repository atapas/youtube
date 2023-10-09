
import {useState, useEffect} from 'react';

async function fetchCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  return countries;
}

const Countries = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const countries = await fetchCountries();
      setData(countries);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading){
    return(
      <div>Loading Countries...</div>
    )
  }

  return(
    <ul>
      {
        data.map(({name})=> (
          <li key={name.common}>{name.common}</li>
        ))
      }
    </ul>
  )
}

export default Countries;