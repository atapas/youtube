import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';

import {FamilyContext} from './FamilyContext';
import {useContext} from 'react';

const Children = () => {
  const secret = useContext(FamilyContext);

  return (
    <div className="children">
      <h2>{`Children ${secret.familyName}`}</h2>
      <GrandSon />
      <GrandDaughter />
    </div>
  );
}

export default Children;