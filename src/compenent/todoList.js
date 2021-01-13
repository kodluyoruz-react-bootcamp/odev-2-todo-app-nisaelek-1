const todoList= (props) => {
   
	
	return (
        <div>
            <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
		
		<ul className="todo-list">
			{
				 props.todos.map((todo) => (
					<li className={todo.isComplete ? 'completed' :'todo-list' } key={todo.id}>
				<div className="view" key={todo.id} onClick={(event) =>props.completeTodo(todo.id)} >
					<input className="toggle" type="checkbox" />
					<label> {todo.text}</label>
					<button className="destroy"
					  onClick={(event) => props.removeTodo(todo)} 
					   ></button>
				</div>
			</li>
				))
			}
			
			
			
		</ul>
	</section>
        </div>
    )
}

export default todoList
