import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });
  

const CustomerForm = (props) => {

    const initialState = {
      name: '',
      person_contact: '',
      telphone_number: '',
      location: '',
      num_employee: ''

    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (event, formProperty) => {
      let _form = { ...formData, [formProperty] : event.target.value}
      setFormData(_form)
    }

    const classes = props.classes;

    return (
        <div className='row center-xs' >
                <Paper className='col-md-8 paper'>
                  <form className={classes.container} noValidate autoComplete="off">
                      <TextField
                        label="Customer Name"
                        className={classes.textField}
                        value={formData.name}
                        onChange={(e) => handleChange(e, 'name')}
                        margin="normal"
                        required
                      />

                      <TextField
                        label="Person of Contact"
                        className={classes.textField}
                        value={formData.person_contact}
                        onChange={(e) => handleChange(e, 'person_contact')}
                        margin="normal"
                        required
                      />      

                      <TextField
                        label="Telephone number"
                        className={classes.textField}
                        value={formData.telphone_number}
                        onChange={(e) => handleChange(e, 'telphone_number')}
                        margin="normal"
                        required
                      />      

                      <TextField
                        label="location"
                        className={classes.textField}
                        value={formData.location}
                        onChange={(e) => handleChange(e, 'location')}
                        margin="normal"
                        required
                      />      

                      <TextField
                        label="Number of employees"
                        className={classes.textField}
                        value={formData.num_employee}
                        onChange={(e) => handleChange(e, 'num_employee')}
                        margin="normal"
                        required
                      />      
                  </form>
                </Paper>
        </div>
    )
}

// export default withRouter(connect()(CustomerForm))
export default withStyles(styles)(CustomerForm);