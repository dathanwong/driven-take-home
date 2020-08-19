import React, { useState } from 'react';
import SizeInput from '../Components/SizeInput';

const Main = (props) => {

    //Dimensions of the checkerboard, N x N
    const [dimensions, setDimensions] = useState(8);

    return ( 
        <div className="container">
            <div className="row">
                <SizeInput dimensions={dimensions} setDimensions={setDimensions}/>
            </div>
        </div>
     );
}
 
export default Main;