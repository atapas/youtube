const { log, error } = console;

log('Sync vs Async');

let greeting = 'Hello';
function getName() {
    return "Bob";
}
let message = `${greeting}, ${getName()}`;
log(message);

const getFullName = function () {
    log("Alex M");
}

getFullName();

// Introduce Async
let luckyNumber = 9;
setTimeout(function(){
    let doubleLucky = luckyNumber * 2;
    log(doubleLucky);
}, 0);

setTimeout(function(){
    log(luckyNumber);
}, 2000);

log(luckyNumber);


new Promise(function(resolve, reject){
    resolve(luckyNumber * 3);
}).then(function(result){
    log(result);
});


function getPizza(success, fail) {
    const random = Math.floor(Math.random() * 100);
    random > 50 ? success('Fetched Pizza') : fail('Failed to fetch');
}
getPizza(
    function(msg) {
        log(msg)
    }, 
    function(msg) {
        error(msg)
    }
);

log('Hi');







