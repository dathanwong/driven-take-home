import React from 'react';
import './CheckerboardStyle.css';

const Square = (props) => {

    const {rowIndex, colIndex, col, movePiece, clickedPiece} = props;

    //Handle clicking to move piece
    function handleClick(e){
        //Make sure square is considered a potential move, col value = -1
        console.log("Clicked");
        if(col === -1){
            console.log("valid");
            movePiece([clickedPiece[0], clickedPiece[1]], [rowIndex, colIndex])
        }
    }

    return ( 
        <span onClick={handleClick} key={rowIndex + colIndex} className={col === 1 ? "square square-black" : (col === -1 ? "square suggested" : "square square-white")}></span>
     );
}
 
export default Square;