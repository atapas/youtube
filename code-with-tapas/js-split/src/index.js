console.log('Js Split Examples!');

const msg = "Yes, You can Do it!";

console.log(msg[0]); // Y

let arr = msg.split(' ');
console.log(arr); // ["Yes,", "You", "can", "Do", "it!"]

let arr2 = msg.split(' ', 2);
console.log(arr2);

let arr3 = msg.split();
console.log(arr3); // ["Yes, You can Do it!"]

console.log(''.split()); // ['']

console.log(''.split('')); // []

{
    let message = 'The sky is blue. Grass is green! Do you know the color of the Cloud?';
    let arr = message.split(/[.,!,?]/, 3);
    console.log(arr);
}

{
    let name = 'Tapas Adhikary';
    let subs = name.split(' ');
    let joined = subs.join('-');
    console.log(joined); // Tapas-Adhikary
}

{
    let name = 'Tapas Adhikary';
    let [firstName, lastName] = name.split(' ');
    console.log(firstName, lastName);
}