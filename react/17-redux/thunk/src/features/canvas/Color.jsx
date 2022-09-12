import { useSelector, useDispatch } from "react-redux";
import { changeColor, selectColor, paintColorAsync, selectColorLoading } from "./canvasSlice";

import styles from './Canvas.module.css';
import logo from '../../logo.svg';

const Color = () => {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();
  const isColorLoading = useSelector(selectColorLoading);
  return(
    <div className={styles.colors}>
      <h2>Colors{ isColorLoading === 'loading' ? '(Loading...)': null}</h2>
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
        <button
          className={styles.btn}
          onClick={(color) => dispatch(paintColorAsync())}>
            Random
        </button>

      </div>
    </div>
  )
};

export default Color;