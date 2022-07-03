import { FamilyContext } from './FamilyContext';
import { useContext } from 'react';

const GrandDaughter = () => {
  const secret = useContext(FamilyContext);  
  return (    
    <div className="gdaughter">
      <h3>{`Granddaughter ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  );
}

export default GrandDaughter;