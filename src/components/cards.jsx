import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cards() {
const [todos, setTodos] = useState([
  { id: new Date().getTime(), list: "Buy groceries", time: "9:00 AM" },
  { id: new Date().getTime() + 1, list: "Finish homework", time: "11:00 AM" },
  { id: new Date().getTime() + 2, list: "Clean the house", time: "2:00 PM" },
  { id: new Date().getTime() + 3, list: "Pay bills", time: "4:30 PM" },
  { id: new Date().getTime() + 4, list: "Call a friend", time: "7:00 PM" },
  ]);
  const deleteCard = (todoId) => {
    setTodos(card => card.filter((todo) => {
      console.log(todo.id, "!==", todoId)
      return todo.id !== todoId;
    }))
  }
  return (
    <div className="todos-container">
      
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <p><strong>{todo.list}</strong></p>
          <p>{todo.time}</p>

          <button onClick={() => deleteCard(todo.id)} className="delete-button">
            <FontAwesomeIcon icon={faTrash} className="trash-icon"/>
          </button>
        </div>
      ))}

      
    </div>
  );
}
export default Cards;