import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Customers() {
    return (
        <div className="Customers">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    Customers
                </Typography>
                </Toolbar>
            </AppBar>
            <Customerlist />
        </div>
    );
}

export default Customers;
