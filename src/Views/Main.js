import React, { useState } from 'react';
import SizeInput from '../Components/SizeInput';
import Checkerboard from '../Components/Checkerboard';
import ColorPicker from '../Components/ColorPicker';

const Main = (props) => {

    //Dimensions of the checkerboard, N x N
    const [dimensions, setDimensions] = useState(8);
    const [playerOneColor, setPlayerOneColor] = useState("red");
    const [playerTwoColor, setPlayerTwoColor] = useState("black");

    return ( 
        <div className="container">
            <div className="row">
                <SizeInput dimensions={dimensions} setDimensions={setDimensions}/>
            </div>
            <div className="row">
                <ColorPicker playerOneColor={playerOneColor} setPlayerOneColor={setPlayerOneColor} playerTwoColor={playerTwoColor} setPlayerTwoColor={setPlayerTwoColor} />
            </div>
            <div className="row">
                <div className="col">
                    <Checkerboard dimensions={dimensions} playerOneColor={playerOneColor} playerTwoColor={playerTwoColor} />
                </div>
            </div>
        </div>
     );
}
 
export default Main;