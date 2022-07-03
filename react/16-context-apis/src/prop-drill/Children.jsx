import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';

const Children = ({secret}) => {
  
  return (
    <div className="children">
      <h2>{`Children ${secret.familyName}`}</h2>
      <GrandSon secret={secret}/>
      <GrandDaughter secret={secret} />
    </div>
  );
}

export default Children;