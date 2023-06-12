import './style.css'
import {colors} from './colors'

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

const createColorPallet = () => {
  colors.forEach((color) => {
    const colorPallet = document.createElement('div')
    colorPallet.classList.add('color-pallet')
    colorPallet.style.backgroundColor = color.data
    const colorName = document.createElement('div')
    colorName.classList.add('color-name')
    colorName.textContent = color.data
    colorPallet.appendChild(colorName)
    colorPallet.addEventListener('click', () => {
      const colorCode = color.data
      console.log(colorCode)
      copyContent(colorCode)
    })
    document.querySelector('#app').appendChild(colorPallet)
  })
}

const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

createColorPallet()



