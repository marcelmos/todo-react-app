import React, {Component} from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Navigation from './components/nav/Navigation';

/*
  
*/

function App() {
  let user = true;

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main className="container">
        {user ? <MainApp /> : <LogIn />}
      </main>
    </div>
  );
}

function MainApp(){
  return(
    <section>
      <TaskList />
    </section>
  );
}

function LogIn(){
  return(
    <div className="login-form">
      <form className="form">
        <input type="login" className="input-task login-item" placeholder="your@mail.com" />
        <input type="password" className="input-task login-item" placeholder="password" />
        <input type="submit" className="login-item login-submit" value="Login" onClick={() => this.user = true}/>
      </form>
    </div>
  );
}


export default App;


