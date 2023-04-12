console.log('Script Loaded...');

function paint(color) {
  console.log(color);
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
  console.log(circle);
}