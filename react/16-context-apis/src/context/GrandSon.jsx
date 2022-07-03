import { FamilyContext } from './FamilyContext';
import { useContext } from 'react';

const GrandSon = () => {
  const secret = useContext(FamilyContext);

  return (
    <div className="gson">
      <h3>{`Grandson ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  );
}

export default GrandSon;