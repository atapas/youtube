import { getProducts } from "./data/product"
import { getImageURL } from "./utils/image-util";

import JHCB from "./assets/product/jhcb.jpg";

function App() {
  const products = getProducts();

  return (
    <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {
        products.map(product => (
           <li
            className="flex flex-col mx-3 my-3 p-4 border border-black/10 shadow-sm rounded-xl" 
            key={product.id}>
            <img 
              src={getImageURL(product.cover)} 
              alt={product.name} 
              className="w-full object-cover" />
            <h2 className="text-3xl my-3">{product.title}</h2>
            <p>{product.description}</p>
           </li> 
        ))
      }
    </ul>
  )
}

export default App
