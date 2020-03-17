import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloMessage from './Components/HelloMessage'
// import Counter from './Components/Counter'
// import TodoApp from './Components/TodoApp';
// import Hello from './Components/HelloCreate'
// import Example from './Components/FunctionHello'
// import Timer from './Components/Timer'
import Board from './Components/Trial'
import FunctionClick from './Components/FunctionClick'

function App() {
  return (
    <div className="App">
      <HelloMessage name="Akash" />
      <Board/>
      <FunctionClick/>
      {/* <Counter /> */}
      {/* <TodoApp /> */}
      {/* <Timer /> */}
      {/* <Hello/> */}
      {/* <Example/> */}

    </div>
  );
}

export default App;
