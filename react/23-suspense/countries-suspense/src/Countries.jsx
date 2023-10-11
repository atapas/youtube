
import { Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';

import CountryList from "./CountryList";
import Time from "./Time";

const Countries = () => {
  return (
    <>
      <h2>Countries with Time - Suspense & Error Boundaries</h2>
      
        <Suspense fallback={<p>Loading time...</p>}>
          <Time />
        </Suspense>
        <ErrorBoundary
          fallback={
            <p>
              Something went wrong in fetching countries...
            </p>
          }
        >
          <Suspense fallback={<p>Loading countries...</p>}>
            <CountryList />
          </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Countries;