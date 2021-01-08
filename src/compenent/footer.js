import React from 'react'

function footer(props) {
   
    return (
        <div>
           <footer className="footer">

<span className="todo-count">
    <strong>{props.count}</strong>
     -items left
</span>

<ul className="filters">
    <li>
        <a className="selected">All</a>
    </li>
    <li>
        <a>Active</a>
    </li>
    <li>
        <a>Completed</a>
    </li>
</ul>
<button className="clear-completed" 
onClick={props.clearCompleted}>
    Clear completed
</button>
</footer> 
        </div>
    )
}

export default footer
