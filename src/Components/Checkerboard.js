import React from 'react';
import './CheckerboardStyle.css';

const Checkerboard = (props) => {
    
    const {dimensions} = props;

    //Create checkerboard matrix with each item indicating color
    let board = [];
    for(let i = 0; i < dimensions; i++){
        let row = [];
        for(let j = 0; j < dimensions; j++){
            row.push((j+i)%2===0 ? 0 : 1);
        }
        board.push(row);
    }


    return ( 
        board.map((row, index) =>{
            console.log(row);
            return (
                <div className="row board-row" key={index}>
                    {
                        row.map((col, colIndex) =>{
                            return (
                                <span key={index + colIndex} className={col === 1 ? "square square-black" : "square square-white"}></span>
                            )
                            })
                    }
                </div>
            )
        }
            
        )
     );
}
 
export default Checkerboard;