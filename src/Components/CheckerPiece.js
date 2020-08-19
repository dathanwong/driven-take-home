import React, { useState } from 'react';
import './CheckerPieceStyle.css';

const CheckerPiece = (props) => {

    const {color, left, shape, isClicked} = props;

    return ( 
        <div className={"checker-piece" + " " + "checker-piece-"+shape + " " + (isClicked===true ? "checker-piece-clicked" : "")} style={{backgroundColor:color, left:left+"px"}}></div>
     );
}
 
export default CheckerPiece;