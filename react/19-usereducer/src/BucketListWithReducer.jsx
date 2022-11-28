import { useReducer } from "react";
import {TiTick, TiTrash} from 'react-icons/ti';
import { blReducer, formReducer } from "./BucketListReducers";

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

const BucketListWithReducer = () => {
  const[state, dispatch] = useReducer(blReducer, []);
  const [wish, dispatchFormAction] = useReducer(formReducer, {
      title: "",
      by: ""
  });
  
  const handleWish = (e) => {
    e.preventDefault();
    dispatchFormAction({
      type: "INPUT_TEXT",
      field: e.target.name,
      payload: e.target.value
    })
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
              <span><TiTick size={24} onClick={(id) => dispatch({type: "DONE_WISH", payload: item.id})} /></span>
              <span><TiTrash size={24} onClick={(id) => dispatch({type: "REMOVE_WISH", payload: item.id})}/></span>
            </li>
          ))}
        </ul>
        <div>
          I want to do <input type="text" name="title" onChange={handleWish}/> by{" "}
          <input type="date" name="by" onChange={handleWish} />
          <button className="wishBtn" onClick={() => dispatch({type: "ADD_WISH", payload: wish})}>Make a Wish!</button>
        </div>
      </div>
    </>
  );
};

export default BucketListWithReducer;
