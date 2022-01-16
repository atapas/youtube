const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}

function getPropertyValue(key) {
  //return employee[key];

  const { [key]: returnValue } = employee;
  return returnValue;
}

const id = getPropertyValue('id');
const name = getPropertyValue('name');

console.log(id, name);





