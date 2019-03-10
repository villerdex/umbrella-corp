import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
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
    const error = {}

    const [formData, setFormData] = useState(initialState);
    const [formDataError, setErrorFormData] = useState(error);

    const handleChange = (event, fieldName) => {
      let _form = { ...formData, [fieldName] : event.target.value}
      setFormData(_form)
    }

    const resetValidationOnClickText = (fieldName) => {
      if(formDataError[fieldName]) {
        delete formDataError[fieldName]
        let _formError = {...formDataError}
        setErrorFormData(_formError)
      }
      console.log(formDataError)

    }

    const onSubmit = () => {
      let _errors = {}
      for (var key in formData) {
        if (formData[key] === null || formData[key] === ''){
          _errors[key] = key + ' is required';
        }
      }
      setErrorFormData(_errors)
    }

    const classes = props.classes;

    console.log('rerenders')

    const nameErrorMessage = formDataError.name ? 'customer name is required' : ''
    const contactPersonErrorMessage = formDataError.person_contact ? 'contact person is required' : ''
    const telephoneNumberErrorMessage = formDataError.telphone_number ? 'telphone number is required' : ''
    const numberEmployeeErrorMessage = formDataError.num_employee ? 'number of employee is required' : ''
    const locationErrorMessage = formDataError.location ? 'location is required' : ''



    return (
        <div className='row center-xs' >
                <Paper className='col-md-8 paper'>
                  <form className={classes.container} noValidate autoComplete="off">

                      <div className='row col-md-6' >
                        <TextField
                              label="Customer Name"
                              className={classes.textField}
                              value={formData.name}
                              margin="normal"
                              onChange={(e) => handleChange(e, 'name')}
                              onClick={() => resetValidationOnClickText('name')}
                              error={formDataError.name != null}
                              helperText={nameErrorMessage}
                              fullWidth
                              required
                            />
                      </div>

                      <div className='row col-md-6' >
                        <TextField
                            label="Person of Contact"
                            className={classes.textField}
                            value={formData.person_contact}
                            margin="normal"
                            onChange={(e) => handleChange(e, 'person_contact')}
                            onClick={() => resetValidationOnClickText('person_contact')}
                            error={formDataError.person_contact != null}
                            helperText={contactPersonErrorMessage}
                            fullWidth
                            required
                            />      
                      </div>

                      <div className='row col-md-6' >
                          <TextField
                              error={true}
                              label="Telephone number"
                              helperText={'test error'}
                              className={classes.textField}
                              value={formData.telphone_number}
                              margin="normal"
                              onChange={(e) => handleChange(e, 'telphone_number')}
                              onClick={() => resetValidationOnClickText('telphone_number')}
                              error={formDataError.telphone_number != null}
                              helperText={telephoneNumberErrorMessage}
                              fullWidth
                              required
                            />   
                      </div>

                      <div className='row col-md-6' >
                        <TextField
                            label="Number of employees"
                            className={classes.textField}
                            value={formData.num_employee}
                            margin="normal"
                            onChange={(e) => handleChange(e, 'num_employee')}
                            onClick={() => resetValidationOnClickText('num_employee')}
                            error={formDataError.num_employee != null}
                            helperText={numberEmployeeErrorMessage}
                            fullWidth
                            required
                          />      
                      </div>

                      <div className='row col-md-12' >
                        <TextField
                            label="location"
                            className={classes.textField}
                            value={formData.location}
                            margin="normal"
                            onChange={(e) => handleChange(e, 'location')}
                            onClick={() => resetValidationOnClickText('location')}
                            error={formDataError.location != null}
                            helperText={locationErrorMessage}
                            fullWidth
                            required
                          />      
                      </div>
                  </form>

                  <Button variant="contained" color="primary" onClick={() =>  onSubmit()}>
                    Add Customer
                  </Button>
                </Paper>
        </div>
    )
}

// export default withRouter(connect()(CustomerForm))
export default withStyles(styles)(CustomerForm);