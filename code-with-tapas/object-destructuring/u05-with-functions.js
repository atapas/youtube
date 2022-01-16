const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}

function logEmployee({name, dept}) {
  console.log(`${name} is ${dept}`);
}

logEmployee(employee);


function getUser() {
  return {
    'name': 'Alex',
    'age': 45
  }
}

const { age } = getUser();



