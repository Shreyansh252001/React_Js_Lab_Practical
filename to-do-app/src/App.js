<<<<<<< HEAD
import React,{useState} from 'react'
import "./App.css";

const App = () => {

  //const arr=[1,2,3,4,5];

  //return(
  
    /*<div className="App"> 
      {
      arr.map((num) => (
        <div>{num} ,</div>
      )) 
      }
    </div>*/
  

   /* <div className="App">
      {arr.filter((num)=>num!==3 && num!==4)}
    </div>*/

    /*<div className="App">
      {
        arr.filter((num)=>num==3)
      }
    </div>*/
   /*   const arr=[
        {
          id:1,
          name:"a"
        },
        { 
          id:2,
          name:"b"
        },
      ];*/


      const [todo, setTodo] = useState("");
      const [todos, setTodos] = useState([]);
      const [editId,setEditId]=useState(0);

      const handleSubmit = (e)=>
      {
          e.preventDefault();

          if(editId)
          {
            const editTodo=todos.find((i)=>(i.id)===editId);

            const updatedTodos=todos.map((t)=>t.id===editTodo.id?t={id:t.id,todo}:{ id:t.id, todo:t.todo});
          
          setTodos(updatedTodos);
          setEditId(0);
          setTodo("");
          return;
        }

            if(todo!==""){
              setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
              setTodo("");
            }
          
      };

      const handleDelete = (id)=>{

        const delTodo=todos.filter((to)=>to.id!==id); 
        setTodos([...delTodo]);
      };


    const handleEdit = (id)=>{
      const editTodo = todos.find((i) => i.id === id);

      setTodo(editTodo.todo);

      setEditId(id);
    };
      
      return( 
        
        <div className="App">
          <div className="container" >
            <h1>Todo List App</h1>

            <form className="todoform" onSubmit={handleSubmit}>
              
              <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>

                <button>{editId ? "Edit" : "Go"}</button>
        
            </form>

            <ul className="allTodos">

              {todos.map((t)=>(
              
              <li className="b">

                <span className="a" key={t.id} > {t.todo}</span>

                  <div class="bor">
                <button onClick={()=>handleEdit(t.id)}>Edit</button>
                  </div>

                  <div class="bor">
                <button onClick={()=>handleDelete(t.id)}>Delete</button>
                  </div>

              </li>
              ))}
              
            </ul>
          </div>

        </div>
      );
    


      /*<div className="App">
        {
        arr.map(
          (num) => 
        {
          return <div key={num.id}>{num.name}</div>;
          }
          )
        }
        </div>*/
};

export default App 
=======
//import logo from './logo.svg';

import React from 'react';

import './App.css';
import {useState} from 'react';
import Primarybtn from './Primarybtn.js';
import MainInput from './MainInput.js';

console.log(React.version);
const App = () =>
{
  const [a,setName]=useState("");

return(
  <div> 

    <MainInput setName={setName} />

  <input onChange={(e)=>setName(e.target.value)} />

  {a}

  <br/>
  <br/>

  ReactDOM.render(
{
  (a === "go" )?(<Primarybtn fullname="go"/>) :(<Primarybtn fullname={a}/>)
});


<MainInput setName={setName}/>
  </div>
);

};
/*function App() 
{ 
  
  return 
  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
>>>>>>> 8a525f204769f316a71edcb3e259134de50355e4
