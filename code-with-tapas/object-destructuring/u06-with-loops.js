const users = [
  { 
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  { 
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  { 
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let {name, age} of users) {
  console.log(`${name} is ${age} years old!!!`);
}