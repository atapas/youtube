console.log('Introduction to Promises!');






// Promise States(Internal)
// - Pending: When execution starts
// - fulfilled: When Resolves Successfully.
//- rejected: When promise rejects.

// fulfilled / rejected = Settled

// Result
// - undefined: Initial phase when state is pending
// - value : When promise resolves successfully
// - error: When promise rejects.

// .then()
// .catch()
//  .finally()

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        // Reject it as the disaster happened
        //reject(new Error('Jack fell down and...'));
        resolve('Water');
    }, 2000);
});

const grandParentsCooking = () => {
    promise
    .then(function(result){
        console.log(`Coking starts with ${result}`);
    })
    .catch(function(error){
        console.log(`OMG ${error.message}`);
    })
};

grandParentsCooking();
















