
import { Suspense } from "react";
import CountryList from "./CountryList";
import Time from "./Time";

const Countries = () => {
  return (
    <>
      <Suspense fallback={<p>Loading time...</p>}>
        <Time />
      </Suspense>
      <Suspense fallback={<p>Loading countries...</p>}>
        <CountryList />
      </Suspense>
    </>
  )
}

export default Countries;