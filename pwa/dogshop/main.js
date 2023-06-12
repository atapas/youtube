import './style.css'
import {colors} from './colors'

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



