
import Children from './Children';
import {FamilyContext} from './FamilyContext';
import {useContext} from 'react';

const Parent = () => {
  const secret =  useContext(FamilyContext);
  return (
    <div className="parent">
      <h1>{`Parent ${secret.familyName}`}</h1>
      <p>{secret.onlyParentCanSee()}</p>
      <Children/>
    </div>
  );
}

export default Parent;