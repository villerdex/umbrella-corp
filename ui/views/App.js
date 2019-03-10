import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';

import CustomerForm from '../components/customer.form'
import CustomerList from '../components/customer.list'

const App = (props) => {

    return (
        <div className='row col-xs-12'>
            <div className='row col-xs-6' >
                <CustomerForm></CustomerForm>
            </div>

            <div className='row col-xs-6' >
                <CustomerList></CustomerList>
            </div>
        </div>
    )
}

// export default withRouter(connect()(App))
export default connect()(App);