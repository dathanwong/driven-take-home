import React from 'react';

const ColorPicker = (props) => {

    const {playerOneColor, setPlayerOneColor, playerTwoColor, setPlayerTwoColor} = props;

    function handlePlayerOne(e){
        setPlayerOneColor(e.target.value);
    }

    function handlePlayerTwo(e){
        setPlayerTwoColor(e.target.value);
    }

    return ( 
        <>
        <div className="container">
            <div className="row">
                <span>Player One Color: </span>
                <label>Red</label>
                <input type="radio" value="red" name="playerOneColor" checked={playerOneColor==="red"} onChange={handlePlayerOne} />
                <label>Blue</label>
                <input type="radio" value="blue" name="playerOneColor" checked={playerOneColor==="blue"} onChange={handlePlayerOne} />
                <label>Black</label>
                <input type="radio" value="black" name="playerOneColor" checked={playerOneColor==="black"} onChange={handlePlayerOne}/>
            </div>
            <div className="row">
                <span>Player Two Color: </span>
                <label>Red</label>
                <input type="radio" value="red" name="playerTwoColor" checked={playerTwoColor==="red"} onChange={handlePlayerTwo}/>
                <label>Blue</label>
                <input type="radio" value="blue" name="playerTwoColor" checked={playerTwoColor==="blue"} onChange={handlePlayerTwo}/>
                <label>Black</label>
                <input type="radio" value="black" name="playerTwoColor" checked={playerTwoColor==="black"} onChange={handlePlayerTwo}/>
            </div>
        </div>
        </>
     );
}
 
export default ColorPicker;