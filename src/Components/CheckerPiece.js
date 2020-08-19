import React, { useState } from 'react';
import './CheckerPieceStyle.css';

const CheckerPiece = (props) => {

    const {color, left, shape} = props;

    return ( 
        <div className={"checker-piece" + " " + "checker-piece-"+shape} style={{backgroundColor:color, left:left+"px"}}></div>
     );
}
 
export default CheckerPiece;