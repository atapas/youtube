const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


months[new Date().getMonth()]


new Date().getMonth()


  switch(num) {
    case 0:
      month="January";
      break;
    case 1:
      month="February";
      break;
    case 2:
      month="March";
      break;
    ...
    ...  
    case 9:
      month="October";
      break;
    case 10:
      month="November";
      break;
    case 11:
      month="December";
      break;
    default:
      month="Invalid month";
  }
      



// Create a date object
const today = new Date();



// Getting full month name (e.g. "September")
const month = today.toLocaleString('default', 
    { month: 'long' });



console.log(month);




