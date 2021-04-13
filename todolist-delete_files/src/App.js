import React, { useState } from 'react';
import './App.css';
import Todotable from './components/TodoTable'

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
    if(desc.length>0 && date.length>0){
      setTodos([...todos, desc]);
      setDates([...dates, date]);
      setDate('')
      setDesc('')
    }
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
        <input type="date" onChange={inputChangedDate} value={date}/>
        <input type="submit" value="Add"/>
      </form>
      <Todotable dates={dates} todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;