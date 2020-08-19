import React from 'react';
import './CheckerboardStyle.css';

const Square = (props) => {

    const {rowIndex, colIndex, col} = props;

    return ( 
        <span key={rowIndex + colIndex} className={col === 1 ? "square square-black" : (col === -1 ? "square suggested" : "square square-white")}></span>
     );
}
 
export default Square;