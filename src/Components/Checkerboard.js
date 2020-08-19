import React, {useState, useEffect} from 'react';
import './CheckerboardStyle.css';
import CheckerPiece from './CheckerPiece';
import Square from './Square';

const Checkerboard = (props) => {
    
    const {dimensions, playerOneColor, playerTwoColor, playerOneShape, playerTwoShape} = props;
    const [checkerPieces, setCheckerPieces] = useState(null);
    const [clickedPiece, setClickedPiece] = useState([-3, -3]);
    const [clickedPiecePlayer, setClickedPiecePlayer] = useState(1);
    const [lastClicked, setLastClicked] = useState(null);
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

    //Function to move piece
    function movePiece(originalLocation, newLocation){
        //Make sure there is a piece at the original location
        let currentPiece = checkerPieces[originalLocation[0]][originalLocation[1]];
        let tempPieces = checkerPieces;
        if(currentPiece != 0){
            //Update last clicked player
            setLastClicked(clickedPiecePlayer);
            tempPieces[originalLocation[0]][originalLocation[1]] = 0;
            tempPieces[newLocation[0]][newLocation[1]] = currentPiece;
            setCheckerPieces(tempPieces);
            setBoard(resetBoard);
        }
    }

    //Initialize checker pieces with an array indicating their location
    //0 = no piece
    //1 = red piece
    //-1 = black piece
    useEffect(() => {
        setBoard(resetBoard());
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
        //Make sure the same player is not clicking again
        if(lastClicked !== clickedPiecePlayer){
            //Set the potential moves
            if(clickedPiecePlayer === 1){
                let row = clickedPiece[0] + 1;
                let col1 = clickedPiece[1]+1;
                let col2 = clickedPiece[1]-1;
                if(row >= 0 && row < dimensions && col1 >= 0 && col1 < dimensions){
                    if(checkerPieces[row][col1] === 0) tempBoard[row][col1] = -1;
                }
                if(row >= 0 && row < dimensions && col2 >= 0 && col2 < dimensions){
                    if(checkerPieces[row][col2] === 0) tempBoard[row][col2] = -1;
                }
            }
            else if(clickedPiecePlayer === 2){
                let row = clickedPiece[0] - 1;
                let col1 = clickedPiece[1]+1;
                let col2 = clickedPiece[1]-1;
                if(row >= 0 && row < dimensions && col1 >= 0 && col1 < dimensions){
                    if(checkerPieces[row][col1] === 0) tempBoard[row][col1] = -1;
                }
                if(row >= 0 && row < dimensions && col2 >= 0 && col2 < dimensions){
                    if(checkerPieces[row][col2] === 0) tempBoard[row][col2] = -1;
                }
            }
            setBoard(tempBoard);
        }
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
                                <Square clickedPiece={clickedPiece} movePiece={movePiece} rowIndex={rowIndex} colIndex={colIndex} col={col} />
                                {/* <span key={rowIndex + colIndex} className={col === 1 ? "square square-black" : (col === -1 ? "square suggested" : "square square-white")}></span> */}
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