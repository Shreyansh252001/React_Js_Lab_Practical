import React , {useState} from "react";

import "./App.css";

import TodoForm from "./components/TodoForm";

import TodoList from "./components/TodoList";

const App = () => 
{
  const[todo, setTodo] = useState("ZZZZZZZZZZZZZZZZZZZZZZZZZ");
  const[todos, setTodos]= useState([]);
  const[editId, setEditId]= useState(0);



const handleSubmit= (e) => 
{
  e.preventDefault();

  if(editId) {
    const editTodo=todos.find((i) => i.id === editId);

    const updatedTodos = todos.map((t) => t.id === editTodo.id ? (t= {id: t.id, todo }) : {id: t.id, todo:t.todo}
      );

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("ZZZZZZZZZZZZZZZZZZZZZZZZZ");
      return;
  }

  if(todo !== "")
  {
    setTodos([{ id: `${todo}-${Date.now()}` , todo}, ...todos]);

    setTodo("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  }

};


    const handleDelete= (id) => {
      const delTodo = todos.filter((to) => to.id !== id);

      setTodos([...delTodo]);
    };




    const handleEdit= (id) => {
      const editTodo=todos.find((i)=>i.id === id);
      setTodo(editTodo.todo);
      setEditId(id);
    };


  return (
    <div className="App">
      <div className="Container">

        {/* <form class="todoform" onSubmit={handleSubmit}> */}


          {/* <h1>To Do List App</h1> */}

          <TodoForm handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo}/>


      {/*     <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} ></input>

          <button type="submit"> {editId ? "Edit" : "Go"}</button> */}




          <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}></TodoList>


{/* 
          <ul className="allTodos">
            { 
            todos.map((t) => (

            <li className="singleTodo">

              <span className="todoText" key={t.id}>{t.todo}</span>
              <button onClick={()=>handleEdit(t.id)}> Edit </button>
              <button onClick={()=>handleDelete(t.id)}> Delete </button>

            </li>

          /*  <li /*className="singleTodo"*>
              <span /*className="todoText"* > Learn React </span>
              <button>Edit</button>
              <button>Delete</button>
            </li>*

            ))
            
            }
          </ul>

        </form> */}

      </div>

    </div>
  );
};

export default App;