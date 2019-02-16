import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const MyDialog = ({ handleClose, open, title, body }) => (
    <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
    >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {title}
        </DialogTitle>
        <DialogContent>
            {body}
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Save changes
            </Button>
        </DialogActions>
    </Dialog>
);


export default MyDialog;
