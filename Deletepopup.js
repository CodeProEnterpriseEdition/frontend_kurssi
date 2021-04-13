import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function () {

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                        UNDO
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </div>
    );
}