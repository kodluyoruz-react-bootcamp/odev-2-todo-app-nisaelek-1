import React, {useState} from 'react';
import './App.css';
import Footer from './compenent/footer';
import TodoList from './compenent/todoList';
import Header from './compenent/header';

function App(props) {
  const [todos,setTodos]= useState([]);
  const addTodo = todo => {
    if (!todo.text) {
      return;
    }
    const newTodos =[todo, ...todos];
    setTodos(newTodos);
    // console(todo,...todos);
};
const removeTodo = id=> {
  const removedArr = [...todos.filter(todo => todo.id !== id)];
  setTodos(removedArr);
  
};
const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
       todo.isComplete = !todo.isComplete 
      }
      return todo ;
  });
  setTodos(updatedTodos);
}
  return (
    <div className="todoapp">
      <h1>todos</h1>
    <Header  onSubmit ={addTodo} />
   <TodoList 
   todos={todos}
   completeTodo ={completeTodo}
    removeTodo={removeTodo}/>
    <Footer />
    </div>
  );
}

export default App;
