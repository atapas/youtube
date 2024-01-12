function getImageURL(name) {
  return new URL(`../assets/product/${name}`, import.meta.url).href
}

export {getImageURL};