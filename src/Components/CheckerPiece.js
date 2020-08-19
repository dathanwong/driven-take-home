import React, { useState } from 'react';
import './CheckerPieceStyle.css';

const CheckerPiece = (props) => {

    const {color, left, shape, row, col, clickedPiece, setClickedPiece} = props;

    function handleClick(){
        setClickedPiece([row, col]);
    }

    return ( 
        <div onClick={handleClick} className={"checker-piece" + " " + "checker-piece-"+shape + " " + (clickedPiece[0]===row && clickedPiece[1]===col ? "checker-piece-clicked" : "")} style={{backgroundColor:color, left:left+"px"}}></div>
     );
}
 
export default CheckerPiece;