import React from 'react'
import {Button, Dialog, DialogActions, DialogTitle} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  
  }));


function SimpleDialog( { onClose, open }) {
  
    const handleClose = () => {
      onClose(false);
    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Computation Successfully sent</DialogTitle>
        <DialogActions>
            <Button onClick={() => handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }


export default SimpleDialog