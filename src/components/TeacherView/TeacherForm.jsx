import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const TeacherForm = (props) => {
    return (
        <React.Fragment>
            <DialogTitle id="responsive-dialog-title">
                <Grid container spacing={1}>
                    Mentor Details
                </Grid>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText>
                
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Email Address"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Communication Channel"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type='number'
            id="address1"
            name="address1"
            label="Total Students"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
      </Grid>
                </DialogContentText>
                
            </DialogContent >
            <Divider />
        </React.Fragment >
    );
}

export default TeacherForm;