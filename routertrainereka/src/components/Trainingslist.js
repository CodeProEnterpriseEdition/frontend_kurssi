import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function () {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(response => setTrainings(response))
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        }
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns}></ReactTable>
        </div>
    );
}



// https://stackoverflow.com/questions/60956869/module-not-found-cant-resolve-react-table-react-table-css