const CountryList = ({data}) => {
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

export default CountryList;