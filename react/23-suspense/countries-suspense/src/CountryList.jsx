import fetchData from "../api/fetchData";

const resource = fetchData('https://restcountries.com/v3.1/all');

const CountryList = () => {

  const countries = resource.read();

  return(
    <ul>
      {
        countries.map(({name})=> (
          <li key={name.common}>{name.common}</li>
        ))
      }
    </ul>
  )
}

export default CountryList;