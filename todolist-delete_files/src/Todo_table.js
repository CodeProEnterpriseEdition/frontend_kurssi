import React, { useState } from 'react';
import './App.css';


export default function Todo_table({todos}) {
    return (
        <table className="table-1">
        <tbody>
            {todos.map((todo) =>
            <tr key = {todo.id}>
                <td>id : {todo.id}</td>
                <td>date: {todo.date}</td>
                <td>desc: {todo.description}</td>
                <td><button>Delete</button></td>
            </tr>
            )}
        </tbody>
        </table>
    )
}