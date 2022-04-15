
import React from 'react';

const Child = ({header}) => {
  console.log('Child Rendering');
  return (
    <div className="child">
      <h1>{header}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Sed
        vulputate, ipsum eu dignissim lacinia, nisi nisl 
        aliquam eros, eget aliquet nunc nisl eu urna.
      </p>
    </div>
  );
};

export default React.memo(Child);