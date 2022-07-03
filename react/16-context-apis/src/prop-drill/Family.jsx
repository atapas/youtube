
import Parent from './Parent';

const Family = ({secret}) => {
  console.log(secret);
  return (
    <div className="family">
      <Parent secret={secret}/>
    </div>
  );
}

export default Family;