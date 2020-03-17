import React from 'react'

function FunctionClick(){
    function clickHandler(){
        alert("button clicked")
    }
    return(
        <button onClick={clickHandler}>Click here!</button>
    )
}

export default FunctionClick;