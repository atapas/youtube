
/*const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}*/

// const id = employee.id;
// const name = employee.name;

// const { id, name, dept } = employee;
// console.log(id, name);

const employee = {
  id: 007,
  name: 'James',
  dept: {
    id: 'D001',
    name: 'Spy',
    address: {
      street: '30 Wellington Square',
      city: 'Chelsea'  
    }
  }  
}

// const address = employee.dept.address;
// const street = employee.dept.address.street;

const {dept: {address}} = employee;
const {dept: {address: {street}}} = employee;

console.log(address, street);
