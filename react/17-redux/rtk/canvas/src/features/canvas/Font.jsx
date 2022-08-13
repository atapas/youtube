import { useSelector, useDispatch } from 'react-redux';
import { changeFont, selectFont } from './canvasSlice';
import styles from './Canvas.module.css';

const Font = () => {
  const font = useSelector(selectFont);
  const dispatch = useDispatch();

  return(
    <div className={styles.font}>
      <h2>Font</h2>
      <p>
        <span style={{fontSize: `${font}px`}}>
          Redux Tool Kit(RTK) is the modern way to
          learn Redux. Let's start with the basics.
        </span>
      </p>
      <input 
        type="range" 
        min="10" 
        max="30" 
        value={font} 
        onChange={(e) => dispatch(changeFont(e.target.value))}/>
      <p>{font}px</p>  
      
    </div>
  );
};

export default Font;