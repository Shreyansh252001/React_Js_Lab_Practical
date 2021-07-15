import React from 'react'

const Todoform = ({handleSubmit, todo, editId, setTodo }) => {
    return (
        <form class="todoform" onSubmit={handleSubmit}>

          <h1>To Do List App</h1>

          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

          <button type="submit">{ editId ? "Edit" : "Go"} </button>

        </form>
    );
}

export default Todoform;
