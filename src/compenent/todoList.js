const todoList= ({todos,completeTodo,removeTodo},props) => {
   
	
	return (
        <div>
            <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
		
		<ul className="todo-list">
			{
				 todos.map((todo,index) => (
					<li className={todo.isComplete ? 'completed' :'todo-list' } key={index}>
				<div className="view" key={todo.id} onClick={() => completeTodo(todo.id)} >
					<input className="toggle" type="checkbox" />
					<label> {todo.text}</label>
					<button className="destroy"
					  onClick={() => removeTodo(todo.id)} 
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
