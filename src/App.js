import React, {useState} from 'react';
import './App.css';
import Footer from './compenent/footer';
import TodoList from './compenent/todoList';
import Header from './compenent/header';

function App(props) {
  const [todos,setTodos]= useState([]);
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState('');

  const mapTodos = (todo) => {
    const todoMapped= todo.map((pic, index) => {
      return (
        setCount(prevState => (prevState+1))
      )
    })
    setTodos(prevState => ([...prevState, ...todoMapped]))
  }


  const addTodo = todo => {
    
    if (!todo.text) {
      
      return;
    }
    const newTodos =[todo, ...todos];
    setTodos(newTodos);
    // console(todo,...todos);
};

const removeTodo = id=> {
  const removedArr = [...todos].filter(todo => todo.id !== id);
  
  setTodos(removedArr);
};

const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
       todo.isComplete = !todo.isComplete 
       
      }
     
      return todo ;
     
  });
  const completedList = [...todos].filter(todo => todo.isComplete !== id.isComplete);
  setCompleted(completedList);
  setCount(prevState => (prevState-1) );
  setTodos(updatedTodos);
}
function clearCompleted (isComplete)  {
  const clearCompArr = [...todos].filter(todo => todo.isComplete !== isComplete);
  setTodos(clearCompArr);
 
  return;
}
  return (
    <div className="todoapp">
      <h1>todos</h1>
    <Header  onSubmit ={addTodo} />
   <TodoList 
          todos={todos}
          completeTodo ={completeTodo}
          removeTodo={removeTodo}/>
    <Footer clearCompleted={clearCompleted} 
    count={count}
    completed={completed}/>
    </div>
  );
}

export default App;
