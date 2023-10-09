const CountryList = ({data}) => {

  return(
    <ul>
      <h2>Countries - With Suspense</h2>
      {
        data.map(({name})=> (
          <li key={name.common}>{name.common}</li>
        ))
      }
    </ul>
  )
}

export default CountryList;