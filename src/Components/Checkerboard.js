import React, {useState, useEffect} from 'react';
import './CheckerboardStyle.css';
import CheckerPiece from './CheckerPiece';

const Checkerboard = (props) => {
    
    const {dimensions, playerOneColor, playerTwoColor, playerOneShape, playerTwoShape} = props;
    const [checkerPieces, setCheckerPieces] = useState(null);
    const [clickedPiece, setClickedPiece] = useState([-3, -3]);
    const [clickedPiecePlayer, setClickedPiecePlayer] = useState(1);
    const [board, setBoard] = useState(resetBoard());


    //Create checkerboard matrix with each item indicating color
    //0 is a white square
    //1 is a black square
    //-1 is a suggested move square
    function resetBoard(){
        let tempBoard = []
        for(let i = 0; i < dimensions; i++){
            let row = [];
            for(let j = 0; j < dimensions; j++){
                row.push((j+i)%2===0 ? 0 : 1);
            }
            tempBoard.push(row);
        }
        return tempBoard;
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

    //Show potential moves when a piece is clicked
    useEffect(() =>{
        //Clear board of potential moves
        let tempBoard = resetBoard();
        //Set the potential moves
        if(clickedPiecePlayer === 1){
            if(clickedPiece[0] + 1 > 0 && clickedPiece[0] + 1 < dimensions && clickedPiece[1]+1 > 0 && clickedPiece[1]+1 < dimensions){
                tempBoard[clickedPiece[0]+1][clickedPiece[1]+1] = -1;
            }
            if(clickedPiece[0] + 1 > 0 && clickedPiece[0] + 1 < dimensions && clickedPiece[1]-1 > 0 && clickedPiece[1]-1 < dimensions){
                tempBoard[clickedPiece[0]+1][clickedPiece[1]-1] = -1;
            }
        }
        if(clickedPiecePlayer === 2){
            if(clickedPiece[0] - 1 > 0 && clickedPiece[0] - 1 < dimensions && clickedPiece[1]+1 > 0 && clickedPiece[1]+1 < dimensions){
                tempBoard[clickedPiece[0]-1][clickedPiece[1]+1] = -1;
            }
            if(clickedPiece[0] - 1 > 0 && clickedPiece[0] - 1 < dimensions && clickedPiece[1]-1 > 0 && clickedPiece[1]-1 < dimensions){
                tempBoard[clickedPiece[0]-1][clickedPiece[1]-1] = -1;
            }
        }
        //Check to make sure the potential move is not 
        setBoard(tempBoard);
    }, [clickedPiece])

    return ( 
        board.map((row, rowIndex) =>{
            return (
                <>
                <div className="row board-row" key={rowIndex}>
                    {
                        row.map((col, colIndex) =>{
                            return (
                                <>
                                <span key={rowIndex + colIndex} className={col === 1 ? "square square-black" : (col === -1 ? "square suggested" : "square square-white")}></span>
                                {checkerPieces && checkerPieces[rowIndex][colIndex] === 1 && <CheckerPiece player={1} setClickedPiecePlayer={setClickedPiecePlayer} clickedPiece={clickedPiece} setClickedPiece={setClickedPiece} isClicked={rowIndex == clickedPiece[0] && colIndex == clickedPiece[1]} row={rowIndex} col={colIndex} left={colIndex*100} color={playerOneColor} shape={playerOneShape} />}
                                {checkerPieces && checkerPieces[rowIndex][colIndex] === -1 && <CheckerPiece player={2} setClickedPiecePlayer={setClickedPiecePlayer} clickedPiece={clickedPiece} setClickedPiece={setClickedPiece} isClicked={rowIndex === clickedPiece[0] && colIndex === clickedPiece[1]} row={rowIndex} col={colIndex} left={colIndex*100} row={rowIndex} col={colIndex} left={colIndex*100} color={playerTwoColor} shape={playerTwoShape}/>}
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