import React, { useState } from 'react';
import SizeInput from '../Components/SizeInput';
import Checkerboard from '../Components/Checkerboard';

const Main = (props) => {

    //Dimensions of the checkerboard, N x N
    const [dimensions, setDimensions] = useState(8);

    return ( 
        <div className="container">
            <div className="row">
                <SizeInput dimensions={dimensions} setDimensions={setDimensions}/>
            </div>
            <div className="row">
                <div className="col">
                    <Checkerboard dimensions={dimensions}/>
                </div>
            </div>
        </div>
     );
}
 
export default Main;