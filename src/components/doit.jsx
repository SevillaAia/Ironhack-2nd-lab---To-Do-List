import React from 'react'
import { v4 as UUID4 } from 'uuid'

function DoIt({text, time, todos, setTodos, setText, setTime, timeNow}) {
    const handleInput = () => {
        const newTodo = {id: UUID4(), list: text, time};
        setTodos([newTodo, ...todos])

        setText("");
        setTime(timeNow);
    }
  return (
    // <Link></Link>
    <div className="add-form">
        <input 
          type="text" 
          placeholder='What will you do ?' 
          id='add_text' 
          className="add_input" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input 
          type="datetime-local" 
          id='add_time' 
          className="add_input" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button className='addButton' onClick={handleInput}>
            Add here
        </button>
    </div>
  )
}

export default DoIt