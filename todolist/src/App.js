import React, { useState } from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);
  const [dates, setDates] = useState([]);

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
            Date
            {dates.map((date) =>
            <tr>
              <td>{date}</td>
            </tr>
            )}
            </tbody>
        </table>   
        <table className="table-2">
          <tbody>
            Description
            {todos.map((todo) => 
            <tr>
              <td>{todo}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;