import { useState, useReducer } from "react";
import uuid from 'react-uuid';
import {TiTick, TiTrash} from 'react-icons/ti';

const Header = () => {
  return (
    <>
      <header>
        <h1>My Bucket List</h1>
        <h2>(Using React's useReducer Hook)</h2>
      </header>
    </>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISH":
      {
        console.log(action.payload);
        const newWish = {...action.payload, "id": uuid(), "isDone": false};
        console.log(newWish);
        return [...state, newWish];
      }
    case "REMOVE_WISH":
      {

      }
    case "DONE_WISH":
      {

      }
    default:
      return state;    
  }
}

const BucketListWithReducer = () => {
  const[state, dispatch] = useReducer(reducer, []);

  const [wish, setWish] = useState({
      title: "",
      by: ""
    });
  
  const handleWish = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setWish({...wish, [key]: value});
  }

  const markDone = (id) => {
    console.log(`Wish with ${id} is done!`);
    const index = state.findIndex((wish) => wish.id === id);
    const doneWish = [...state];
    doneWish[index].isDone = true;
  }

  const deleteWish = (id) => {
    console.log(`Wish with ${id} to remove!`)
    const filteredWishes = state.filter((wish) => wish.id !== id);
  }

  return (
    <>
      <Header />
      <div>
        <ul>
          {state && state.length> 0 && state.map((item) => (
            <li key={item.id}>
              <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
                <strong>{item.title}</strong> is due by {item.by}</span>
              <span><TiTick size={24} onClick={(id) => markDone(item.id)} /></span>
              <span><TiTrash size={24} onClick={(id) => deleteWish(item.id)}/></span>
            </li>
          ))}
        </ul>
        <div>
          I want to do <input type="text" name="title" onChange={handleWish}/> by{" "}
          <input type="date" name="by" onChange={handleWish} />
          <button onClick={() => dispatch({type: "ADD_WISH", payload: wish})}>Make a Wish!</button>
        </div>
      </div>
    </>
  );
};

export default BucketListWithReducer;
