function init() {
  const element = document.getElementById("slide");

  element.addEventListener("animationstart", listener);
  element.addEventListener("animationend", listener);
  element.addEventListener("animationiteration", listener);
}

function listener(event) {
  switch (event.type) {
    case "animationstart":
      console.log(`Started: spent time is ${event.elapsedTime}`);
      break;

    case "animationend":
      console.log(`Ended: spent time is ${event.elapsedTime}`);
      break;

    case "animationiteration":
      console.log(`New loop started at ${event.elapsedTime}`);
      break;
  }
}

init();
