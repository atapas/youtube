
import { Suspense } from "react";
import CountryList from "./CountryList";

async function fetchCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  return countries;
}

const Countries = () => {
  const countries = fetchCountries();
  return (
    <div>Hi</div>
  )
}

export default Countries;