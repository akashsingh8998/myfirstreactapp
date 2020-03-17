import React from 'react'

// function Square(props){
// return (<button>{props.value}</button>);
// }

class Square extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : null
        }
    }
    render(){
    return <button onClick = {() => this.setState({value : 'X'})}>{this.state.value}</button>
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square value = {i}/>
    }
    render(){
        return(
            <div>
                <div><h1>TicTacToe Board</h1></div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div>
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        )
    }
}

export default Board;