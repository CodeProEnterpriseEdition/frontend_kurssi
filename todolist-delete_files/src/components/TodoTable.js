import React, { useState, Text } from 'react';


export default function Todotable(props) {

    
    return (
        <div>
            <div className="tables">
                <table className="table-1">
                    <tbody>
                        <tr>
                            <td>
                                Date
                            </td>
                        </tr>
                            {props.dates.map((date, index) =>
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
                            Description
                        </td>
                            </tr>
                            {props.todos.map((todo, index) => 
                            <tr key={index}>
                        <td>{todo}</td>
                        <td><button title='delete' onClick={() => props.deleteTodo(index)}>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

