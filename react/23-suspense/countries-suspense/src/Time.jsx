import fetchData from "../api/fetchData";

const resource = fetchData('http://worldtimeapi.org/api/timezone/Asia/Kolkata');

const Time = () => {

  const time = resource.read();

  return(
    <p>
      {time.datetime}
    </p>
  )
}

export default Time;