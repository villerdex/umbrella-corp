import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';

import CustomerForm from '../components/customer.form'

const App = (props) => {

    return (
        <div className='' >
            <CustomerForm></CustomerForm>
        </div>
    )
}

// export default withRouter(connect()(App))
export default connect()(App);