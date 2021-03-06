import React, { useState } from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);
  const [dates, setDates] = useState([]);
  const date_disc = 'Date'
  const description = 'Description'


  const inputChanged = (event) => {
    setDesc(event.target.value);
  }
  const inputChangedDate = (event) => {
    setDate(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
    setDates([...dates, date]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index))
    setDates(dates.filter((date, i) => i !== index))
  }

  return (
    <div className="App">
      <h3 className= "header-item">Add Todo</h3>
      <form onSubmit={addTodo}>
        Description:
        <input type="text" onChange={inputChanged} value={desc}/>
        Date:
        <input type="text" onChange={inputChangedDate} value={date}/>
        <input type="submit" value="Add"/>
      </form>
      <div className="tables">
        <table className="table-1">
          <tbody>
            <tr>
              <td>
                {date_disc}
              </td>
            </tr>
            {dates.map((date, index) =>
            <tr key= {index}>
              <td>{date}</td>
            </tr>
            )}
            </tbody>
        </table>   
        <table className="table-2">
          <tbody>
            <tr>
              <td>
                {description}
              </td>
            </tr>
            {todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo}</td>
              <td><button title='delete' onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;