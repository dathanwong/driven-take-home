import React, {useState, useEffect} from 'react';
import './CheckerboardStyle.css';
import CheckerPiece from './CheckerPiece';

const Checkerboard = (props) => {
    
    const {dimensions, playerOneColor, playerTwoColor, playerOneShape, playerTwoShape} = props;
    const [checkerPieces, setCheckerPieces] = useState(null);

    //Create checkerboard matrix with each item indicating color
    let board = [];
    for(let i = 0; i < dimensions; i++){
        let row = [];
        for(let j = 0; j < dimensions; j++){
            row.push((j+i)%2===0 ? 0 : 1);
        }
        board.push(row);
    }

    //Initialize checker pieces with an array indicating their location
    //0 = no piece
    //1 = red piece
    //-1 = black piece
    useEffect(() => {
        let pieces = [];
        for(let i = 0; i < dimensions; i++){
            let row = [];
            for(let j = 0; j < dimensions; j++){
                if(i <= 1) row.push(1);
                else if(i >= dimensions-2) row.push(-1);
                else row.push(0);
            }
            pieces.push(row);
        }
        setCheckerPieces(pieces);
        console.log(pieces);
    }, [dimensions])

    return ( 
        board.map((row, rowIndex) =>{
            return (
                <>
                <div className="row board-row" key={rowIndex}>
                    {
                        row.map((col, colIndex) =>{
                            return (
                                <>
                                <span key={rowIndex + colIndex} className={col === 1 ? "square square-black" : "square square-white"}></span>
                                {checkerPieces && checkerPieces[rowIndex][colIndex] === 1 && <CheckerPiece left={colIndex*100} color={playerOneColor} shape={playerOneShape} />}
                                {checkerPieces && checkerPieces[rowIndex][colIndex] === -1 && <CheckerPiece left={colIndex*100} color={playerTwoColor} shape={playerTwoShape}/>}
                                </>
                                )
                            })
                    }
                </div>
                </>
            )
        }
            
        )
     );
}
 
export default Checkerboard;