// An example implementation.
// You can implemnet in your own way.

// Credit: https://blog.logrocket.com/data-fetching-react-suspense/

import wrapPromise from './wrapPromise';

function fetchData(url) {
  // Can use axios too
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  //console.log(promise);  

  return wrapPromise(promise);
}

export default fetchData;