import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {Tabs, Tab, AppBar} from '@material-ui/core'

import './App.css';
// https://www.youtube.com/watch?v=_i49HTOacvI
function App() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);
  const [dates, setDates] = useState([]);
  const date_disc = 'Date'
  const description = 'Description'

  const [selectedDate, handleDateChange] = useState(new Date());

  function getdate(params) {
    const string_date = params.toDateString();
    console.log(string_date)
    setDate(string_date)
  }
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

  const [tabvalue, setTabvalue] = useState(0)

  const handleTabs=(event, value)=>{
    console.log(value)
    setTabvalue(value)
  }

  return (
    <div className="App">
      <div>
        <AppBar position="static" >
            <Tabs value={tabvalue} onChange={handleTabs}>
              <Tab label='Home'/>
              <Tab label='Todos'/>
            </Tabs>
        </AppBar>
        <TabPanel value= {tabvalue} index={0}> Hello to home!</TabPanel>
        <TabPanel value= {tabvalue} index={1}> 
        <div>
            <form onSubmit={addTodo}>
            Description:
            <input type="text" onChange={inputChanged} value={desc}/>
            Date:
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={date} onChange={date => getdate(date)} />
            </MuiPickersUtilsProvider>
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
        </TabPanel>
      </div>
    </div>
  );
};

function TabPanel(props){
  const {children, value, index}= props;
    return(
      <div>
          {
            value===index && (<h1>{children}</h1>)
          }
      </div>
    )
}

export default App;