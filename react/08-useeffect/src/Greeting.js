import { useState, useEffect } from "react";

const Greeting = ({ randomMax }) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * randomMax) + 1
  );
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    console.log("Greeting.js: useEffect()");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("random", randomNumber);
    if (randomMax === randomNumber) {
      window.localStorage.setItem("jackpot", true);
    } else {
      window.localStorage.setItem("jackpot", false);
    }

    switch (randomNumber) {
      case 1:
        setGreeting("Hello");
        break;
      case 2:
        setGreeting("Bonjour");
        break;
      case 3:
        setGreeting("Hola");
        break;
      case 4:
        setGreeting("Guten Tag");
        break;
      case 5:
        setGreeting("Ciao");
        break;
      case 6:
        setGreeting("Salut");
        break;
      case 7:
        setGreeting("Hallo");
        break;
      case 8:
        setGreeting("Cześć");
        break;
      default:
        setGreeting("Hello");
    }
    return function cleanUp() {
      console.log('Clean up');
      window.localStorage.removeItem('random');
      window.localStorage.removeItem('jackpot');
    }
  }, [randomNumber, randomMax]);

  return (
    <div className="greeting">
      <h1>Random Greeting</h1>
      <h2 className="message">{greeting}</h2>
    </div>
  );
};

export default Greeting;
