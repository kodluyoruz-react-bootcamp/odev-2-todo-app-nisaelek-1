import React, {useState} from 'react'

function Header(props) {
    const [value,setValue]= useState('');

    const handleChange = e => {
        setValue(e.target.value);
      };
        const  handleSubmit = (e) => { 
            e.stopPropagation();
            e.preventDefault();
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                 text: value
               });
              setValue('');

        };
        
    return (
        <div>
            
            <header className="header">
		
        <form 
        onSubmit={handleSubmit} >
            <input className="new-todo"
            value={value}
             placeholder="What needs to be done?" 
             onChange={handleChange}
              autoFocus />
             
		</form>
	</header>

        </div>
    )
}

export default Header
