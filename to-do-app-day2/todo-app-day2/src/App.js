import React from 'react';
import './App.css';

const App = () => {

  

  return (
    <div className="App">
      <div className="Container">
        <form class="todoform">
<h1>To Do List App</h1>
<input type='text'></input>
<button>Go</button>

<ul>
  <li>
    <span>Learn React</span>
    <button>Edit</button>
    <button>Delete</button>
  </li>
  <li>
    <span>Learn React</span>
    <button>Edit</button>
    <button>Delete</button>
  </li>
</ul>
</form>
      </div>
    </div>
  );
}

export default App
