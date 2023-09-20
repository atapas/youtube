console.log('Learning modules...');



  const { sayHi, sayHola } = await import('./greeting.js');

const promises = Promise.all(
  [
    await import('./greeting.js'), 
    await import('./calc.js')
  ]
);

//console.log(promises);

promises.then(result => {
  //console.log(result);
  console.log(result[1].sum(2,3));
})