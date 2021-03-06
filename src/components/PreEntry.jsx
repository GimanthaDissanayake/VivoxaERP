import React from 'react';
import { makeStyles, Typography, Grid, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles (theme => ({

}));

export default function PreEntry(){

    const [values,setValues] = React.useState({
        type :''
    });
    const handleChange = event => {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
      };
    
    return (
        <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Pre-Enter Customer details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                        <TextField required id="firstName" name="firstName" label="First Name*" fullWidth autoComplete="fname"/>
                    </Grid>
                     <Grid item xs={12} md={6} lg={6}>
                        <TextField required id="lastName" name="lastName" label="Last Name*" fullWidth autoComplete="lname"/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField required id="address1" name="address1" label="Address Line 1*" fullWidth autoComplete="address1"/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField required id="address2" name="address2" label="Address Line 2*" fullWidth autoComplete="address2"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <TextField required id="city" name="city" label="City*" fullWidth autoComplete="city"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <InputLabel htmlFor="type">Vehicle Type</InputLabel>
                        <Select value={values.type} inputProps={{
                            name:'type',
                            id : 'type-simple'
                        }}
                        onChange={handleChange}>
                            <MenuItem value={"Auto"}>Auto</MenuItem>
                            <MenuItem value={"Manual"}>Manual</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
        </React.Fragment>
    );
}