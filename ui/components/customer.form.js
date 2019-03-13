import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { addCustomer, updateCustomer } from '../actions/actions'

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
    button: {
      width: 170
    }
});

const mapStateToProps = state => {
    return {
      toUpdateCustomer: state.toUpdateCustomer,
    };
};


const CustomerForm = (props) => {

  const initialFormState = {
    name: '',
    person_contact: '',
    telephone: '',
    location: '',
    num_employees: ''
  }

  const error = {}

  const [formData, setFormData] = useState(initialFormState);
  const [formDataError, setErrorFormData] = useState(error);
  const [isOnUpdate, setIsOnUpdate] = useState(false);

  useEffect(() => {
    if (props.toUpdateCustomer) {
        setFormData(props.toUpdateCustomer)
        setIsOnUpdate(true)
        setErrorFormData({})
    }
  },  [props.toUpdateCustomer]);

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

    }

    const onSubmit = () => {
      let _errors = {}
      
      for (var key in formData) {
        if (formData[key] === null || formData[key] === ''){
          _errors[key] = key + ' is required';
        }
      }

      //  errors proceed found return
      if(Object.keys(_errors).length !== 0 ) {
        setErrorFormData(_errors)
        return;
      }

      if(isOnUpdate) {
        props.dispatch(updateCustomer(formData))
        setIsOnUpdate(false)
        setFormData(initialFormState)
        return;
      }

      props.dispatch(addCustomer(formData))
      setFormData(initialFormState)
    }

    const clearForm = () => { 
      setFormData(initialFormState)
      setIsOnUpdate(false)
    }

    const classes = props.classes;

    const nameErrorMessage = formDataError.name ? 'customer name is required' : ''
    const contactPersonErrorMessage = formDataError.person_contact ? 'contact person is required' : ''
    const telephoneNumberErrorMessage = formDataError.telphone_number ? 'telphone number is required' : ''
    const numberEmployeeErrorMessage = formDataError.num_employee ? 'number of employee is required' : ''
    const locationErrorMessage = formDataError.location ? 'location is required, format: City(,)Country Code' : ''

    return (
        <div className='row col-xs-12' >
                <Paper className='col-md-12 paper'>
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
                              value={formData.telephone}
                              margin="normal"
                              onChange={(e) => handleChange(e, 'telephone')}
                              onClick={() => resetValidationOnClickText('telephone')}
                              error={formDataError.telephone != null}
                              helperText={telephoneNumberErrorMessage}
                              fullWidth
                              required
                            />   
                      </div>

                      <div className='row col-md-6' >
                        <TextField
                            label="Number of employees"
                            className={classes.textField}
                            value={formData.num_employees}
                            margin="normal"
                            onChange={(e) => handleChange(e, 'num_employees')}
                            onClick={() => resetValidationOnClickText('num_employees')}
                            error={formDataError.num_employees != null}
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
                            placeholder='New york, US'
                            onChange={(e) => handleChange(e, 'location')}
                            onClick={() => resetValidationOnClickText('location')}
                            error={formDataError.location != null}
                            helperText={locationErrorMessage}
                            fullWidth
                            required
                          />      
                      </div>
                  </form>
                  <div className='row col-md-12 center-xs'>
                      <div className='row col-md-6 center-xs'>
                        <Button variant="contained" color="primary" className={classes.button}
                          onClick={() =>  onSubmit()}>
                            {isOnUpdate ? 'Update Customer' : 'Add Customer'}
                        </Button>
                      </div>

                      <div className='row col-md-6 center-xs'>
                      <Button variant="outlined" color="primary" className={classes.button}
                          onClick={() =>  clearForm()}>
                            Clear
                       </Button>
                      </div>
                  </div>
                </Paper>
        </div>
    )
}

// export default withRouter(connect()(CustomerForm))
export default  connect(mapStateToProps)(withStyles(styles)(CustomerForm));