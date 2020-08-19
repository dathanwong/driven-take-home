import React, { useState } from 'react';
import './CheckerPieceStyle.css';

const CheckerPiece = (props) => {

    const {color, left} = props;

    return ( 
        <div className="checker-piece" style={{backgroundColor:color, left:left+"px"}}></div>
     );
}
 
export default CheckerPiece;