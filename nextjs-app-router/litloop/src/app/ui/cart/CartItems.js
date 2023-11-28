'use client'

import { toast } from 'react-toastify';
import { StoreContext } from '../../context';
import {useContext} from 'react';
import { TrashIcon } from "@heroicons/react/24/solid";

const CartItems = () => {
  const {cartData, setCartData} = useContext(StoreContext);

  const removeItem = (event, id, title) => {
    event.preventDefault();
    const filteredItem = cartData.filter((item) => {
      return item.id !== id;
    });

    setCartData([...filteredItem]);

    toast.success(`${title} has been removed from the Cart successfully!`, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT
    });

  }

  return(
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl pb-4">{cartData.length} Items in Cart</h2>
      <ul>
      {
        cartData.map((item) => (
          <li 
            key={item.id}
            className="p-2 m-2 rounded-md flex bg-gray-200">
            <div className="bg-black text-white text-center h-[30px] w-[30px] rounded-full pt-1">{item.type === "Buy" ? 'B' : 'R'}</div> 
            <div className="flex flex-col pt-1 ml-2">
              {item.title}
              <p className="ml-1 pt-1 text-slate-500">{item.type === "Buy" ? `${item.sellPrice} INR` : `${item.rentPrice} INR/PM`}</p>
            </div>
            <a 
              className="ml-3 mt-1 cursor-pointer"
              onClick = {(event, id, name) => removeItem(event, item.id, item.title)}>
              <TrashIcon className="w-6"/>
            </a>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default CartItems;