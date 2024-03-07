
import { useReducer, useEffect } from "react";
import { inventoryReducer, initialState } from "../reducers/inventoryReducer";
import { FETCH_ACTIONS } from "../actions";

import axios from "axios";

const InventoryList = () => {

  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  const { items, loading, error} = state;

  console.log(items, loading, error);

  useEffect(() => {
    dispatch({type: FETCH_ACTIONS.PROGRESS});

    const getItems = async () => {
      try{
        let response = await axios.get("http://localhost:3000/edibles");
        if (response.status === 200) {
          dispatch({type: FETCH_ACTIONS.SUCCESS, data: response.data});
        }
      } catch(err){
        console.error(err);
        dispatch({type: FETCH_ACTIONS.ERROR, error: err.message})
      }
    }

    getItems();

  }, []);


  return (
    <div className="flex flex-col m-8 w-2/5">
      {
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="flex flex-col">
            <h2 className="text-3xl my-4">Item List</h2>
            {
              items.map((item) => (
                <li
                  className="flex flex-col p-2 my-2 bg-gray-200 border rounded-md" 
                  key={item.id}>
                  <p className='my-2 text-xl'>
                    <strong>{item.name}</strong> {' '} {item.picture} of type <strong>{item.type}</strong>
                    {' '} costs <strong>{item.price}</strong> INR/KG.
                  </p>
                  <p className='mb-2 text-lg'>
                    Available in Stock: <strong>{item.quantity}</strong>
                  </p>

                </li>
              ))
            }
            
          </ul>
        )
      }

    </div>
  )
}

export default InventoryList