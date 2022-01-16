const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}

/*const age = employee.age 
  ? employee.age 
  : 25;*/

const {name, age = 25} = employee;  

const {name, dept, message = `${name} is ${dept}`} = employee;
console.log(message);  