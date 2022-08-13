import { useSelector, useDispatch } from "react-redux";
import { changeColor, selectColor } from "./canvasSlice";

import styles from './Canvas.module.css';
import logo from '../../logo.svg';

const Color = () => {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();

  return(
    <div className={styles.colors}>
      <h2>Colors</h2>
      <div 
        className={styles.circle} 
        style={{backgroundColor: color}}>
          <img src={logo} className="App-logo" alt="logo" style={{width: '100%', height: 'auto'}}/>
      </div>
      <div className="buttons">
        <button 
          className={styles.btn} 
          onClick={(color) => dispatch(changeColor('#FFFFFF'))}>
            White
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('orange'))}>
            Orange
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('yellow'))}>
            Yellow
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('pink'))}>
            Pink
        </button>
      </div>
    </div>
  )
};

export default Color;