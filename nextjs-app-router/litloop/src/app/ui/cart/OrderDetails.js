'use client'

import {useContext} from 'react';
import { StoreContext } from '../../context';
import Link from 'next/link';

const OrderDetails = () => {
  const {cartData} = useContext(StoreContext);

  const bookToBuy = cartData.filter((book) => {
    return book.type === "Buy"
  });

  const priceForBuy = bookToBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0,
  );

  const bookToRent = cartData.filter((book) => {
    return book.type === "Rent"
  });

  const priceForRent = bookToRent.reduce(
    (accumulator, book) => accumulator + book.rentPrice,
    0,
  );

  const deliveryCharge = 29;

  return(
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:ml-4 xl:ml-4 2xl:ml-4 lg:mr-4 xl:mr-4 2xl:mr-4">
      <h2 className="text-2xl pb-4">Order Details</h2>
      {
        (bookToBuy.length + bookToRent.length > 0) ? (<><ul className="pb-4 text-md">
          <li>Buying {bookToBuy.length} book(s) for <strong>{priceForBuy} INR </strong></li>
          <li>Renting {bookToRent.length} book(s) for <strong>{priceForRent} INR</strong></li>
          <li className="pt-2">Delivery Charge: <strong>{deliveryCharge} INR</strong></li>
        </ul>
        <div className="border"></div>
        <div className="pt-4">
          <p className="text-xl">Total Amount to Pay</p> 
          <p className="text-center p-4 text-5xl font-semibold">{priceForBuy + priceForRent + deliveryCharge} INR</p>
        </div></>) : 
        (
          <div className="flex flex-col items-center p-2">
            <span className="text-red-500 font-bold text-xl">No Books are in Cart!</span><br/>
            <Link
              href="/store"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >Go To Store</Link>
          </div>)
      }

    </div>
  )
}

export default OrderDetails;