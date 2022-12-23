
const addToFooter = () => {
  const footerElem = document.getElementById('footer-id');
  footerElem.innerText = `CopyRight ${new Date().getFullYear()} @tapasadhikary`
}

addToFooter();