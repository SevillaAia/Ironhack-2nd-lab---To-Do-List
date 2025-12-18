import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { v4 as UUID4 } from "uuid";


function Cards({ todos, setTodos, isEditable, setIsEditable, textEdit, setTextEdit, timeEdit, setTimeEdit }) {
  const deleteCard = (deleteTodoId) => {
    setTodos((card) =>
      card.filter((todo) => {
        console.log(todo.id, "!==", deleteTodoId);
        return todo.id !== deleteTodoId;
      })
    );
  };

  const editCard = (editTodoId, editTodoTime) => {
    setIsEditable(editTodoId);
    setTextEdit("");
    setTimeEdit(editTodoTime);
  };

  const saveCard = (todoId) => {
    setTodos(todos.map(todo => 
      todo.id === todoId 
        ? { ...todo, list: textEdit, time: timeEdit }
        : todo
    ));
    setIsEditable(null); // Sortir du mode édition
  };

  return (
    <div className="todos-container">
      {todos.map((todo) => (
        // text={text} time={time}
        <div key={todo.id} className="todo-card">
          {isEditable === todo.id ? (
            <>
            <input
                type="text"
                placeholder="What will you do ?"
                id="add_text"
                className="add_input"
                value={textEdit}
                onChange={(e) => setTextEdit(e.target.value)}
              />
              <input
                type="datetime-local"
                id="add_time"
                className="add_input"
                value={timeEdit}
                onChange={(e) => setTimeEdit(e.target.value)}
              />
            </>
          ) : (
            <>
              <p>
                <strong>{todo.list}</strong>
              </p>
              <p>{todo.time}</p>
            </>
          )}

          {isEditable === todo.id ? (
            <button onClick={() => saveCard(todo.id)} className="save-button">
              Save
            </button>
          ) : (
            <button onClick={() => editCard(todo.id, todo.list, todo.time)} className="edit-button">
              Edit
            </button>
          )}
          <button onClick={() => deleteCard(todo.id)} className="delete-button">
            <FontAwesomeIcon icon={faTrash} className="trash-icon" />
          </button>
        </div>
      ))}
    </div>
  );
}
export default Cards;
