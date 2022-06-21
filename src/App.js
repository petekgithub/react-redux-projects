import './App.css';
//import Counter from './components/counter/Counter'
import React, { Component} from 'react'
import Todo from './components/todo/Todo';

function App() {
  return (
    <div className="App">
       {/**<Counter /> */}
      <Todo />
    </div>
  );
}

export default App;
