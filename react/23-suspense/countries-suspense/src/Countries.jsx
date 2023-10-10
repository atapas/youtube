
import { Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';

import CountryList from "./CountryList";
import Time from "./Time";

const Countries = () => {
  return (
    <>
      <h2>Countries with Time - Suspense & Error Boundaries</h2>
      <ErrorBoundary
          fallback={
            <p className="text-red-600 text-2xl font-bold">
              Something went wrong...
            </p>
          }
        >
          <Suspense fallback={<p>Loading time...</p>}>
            <Time />
          </Suspense>
          <Suspense fallback={<p>Loading countries...</p>}>
            <CountryList />
          </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Countries;