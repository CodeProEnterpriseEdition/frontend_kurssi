import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';

export default function () {
    const [open, setOpen] = useState(false);
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        //.then(response => console.log(response.content[0].links[0].href))
        .then(response => setCustomers(response.content))
        .catch(err => console.error(err))
    }

    const removeCustomer = (link) => {
        console.log(link)
        if (window.confirm('Are you sure?')){
            fetch(link, {method: 'Delete'})
            .then(res => fetchData())
            .catch(err => console.log(err))
            setOpen(true);
        }
    }
    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res=> fetchData())
        .catch(err => console.error(err))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            sortable: false,
            filterable: false, 
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} car={row.original}/>
        },
        {
            sortable: false,
            filterable: false, 
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button color="default" onClick={() => removeCustomer(row.value)}>Delete</Button>
        }

    ]

    return (
        <div>
            <Addcustomer addCustomer={addCustomer} />
            <ReactTable filterable={true} data={customers} columns={columns}></ReactTable>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Customer removed"
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </div>
    );
    
}



// https://stackoverflow.com/questions/60956869/module-not-found-cant-resolve-react-table-react-table-css