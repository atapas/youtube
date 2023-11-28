'use client'

import {useState} from 'react';
import { StoreContext } from '../context';

export default function StoreProvider({children}) {
  const [cartData, setCartData] = useState([]);

  return(
    <StoreContext.Provider value={{cartData, setCartData}}>
      {children}
    </StoreContext.Provider>
  )
}