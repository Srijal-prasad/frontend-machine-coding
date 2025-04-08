import React from 'react'

function Squrare({isBlack}) {

    const style={
        width:'60px',
        height:'60px',
        backgroundColor: isBlack? 'Black':'White'
    }
  return (
    <div style={style}>
     
    </div>
  )
}

export default Squrare
