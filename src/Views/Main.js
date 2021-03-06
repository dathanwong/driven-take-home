import React, { useState } from 'react';
import SizeInput from '../Components/SizeInput';
import Checkerboard from '../Components/Checkerboard';
import ColorPicker from '../Components/ColorPicker';

const Main = (props) => {

    //Dimensions of the checkerboard, N x N
    const [dimensions, setDimensions] = useState(8);
    const [playerOneColor, setPlayerOneColor] = useState("red");
    const [playerTwoColor, setPlayerTwoColor] = useState("black");
    const [playerOneShape, setPlayerOneShape] = useState("circle");
    const [playerTwoShape, setPlayerTwoShape] = useState("circle");

    return ( 
        <div className="container">
            <div className="row">
                <SizeInput dimensions={dimensions} setDimensions={setDimensions}/>
            </div>
            <div className="row">
                <ColorPicker playerOneColor={playerOneColor} setPlayerOneColor={setPlayerOneColor} playerTwoColor={playerTwoColor} setPlayerTwoColor={setPlayerTwoColor} setPlayerOneShape={setPlayerOneShape} playerOneShape={playerOneShape} setPlayerTwoShape={setPlayerTwoShape} playerTwoShape={playerTwoShape} />
            </div>
            <div className="row">
                <div className="col">
                    <Checkerboard setDimensions={setDimensions} dimensions={dimensions} playerOneColor={playerOneColor} playerTwoColor={playerTwoColor} playerTwoShape={playerTwoShape} playerOneShape={playerOneShape} />
                </div>
            </div>
        </div>
     );
}
 
export default Main;