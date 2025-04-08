import React from 'react'
import Squrare from './square';

function Chessboard() {
    const style={
        display:'grid',
        border:'2px solid black',
        gridTemplateRows:'repeat(8,60px)',
        gridTemplateColumns:'repeat(8,60px)',
        //width:'fit-content'
    }
    const squares=[];
    for(let row=0;row<8;row++){
        for(let col=0;col<8;col++){
            const isBlack=(row+col)%2===1
           squares.push(<Squrare isBlack={isBlack} />)
        }
    }
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={style}>
           {squares}
        </div>
    </div>
  )
}

export default Chessboard
