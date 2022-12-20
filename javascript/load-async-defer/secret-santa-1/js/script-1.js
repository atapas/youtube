
const gifts = [
  'hoodie',
  'moon-light',
  'perfumes',
  'watch',
  'studio-light'
];

const participants = [
  'Alex',
  'Bob',
  'Carl',
  'Dell',
  'Emle'
];

const getRandomElem = arr => {
  return arr[Math.floor(Math.random()*arr.length)];
}

const init = () => {
  const giftElem = document.getElementById('gift-id');
  const childElem = document.getElementById('child-id');
  const santaElem = document.getElementById('santa-id');

  const child = getRandomElem(participants);
  const santa = getRandomElem(participants);
  const gift = getRandomElem(gifts);

  console.log(`${santa} to give ${gift} to ${child}`);

  childElem.innerText = child;
  santaElem.innerText = santa;

  const img = document.createElement('img');
  img.src = `./gift-images/${gift}.png`;
  img.alt = gift;
  img.width = '300';
  img.height = '300';
  giftElem.appendChild(img);
};

init();