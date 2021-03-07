import React, {Component} from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App <i></i></h1>
      </header>

      <section>
        <TaskList />
      </section>
    </div>
  );
}



// Change <li> to separate component


export default App;


