
const GrandSon = ({secret}) => {
  
  return (
    <div className="gson">
      <h3>{`Grandson ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  );
}

export default GrandSon;