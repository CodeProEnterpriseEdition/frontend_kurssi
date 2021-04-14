import React from 'react';
import './App.css';
import Trainingslist from './components/Trainingslist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Trainings() {
    return (
        <div className="Trainings">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    Trainings
                </Typography>
                </Toolbar>
            </AppBar>
            <Trainingslist />
        </div>
    );
}

export default Trainings;
