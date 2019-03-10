import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const App = (props) => {

    return (
        <div className='row center-xs' >
                <Paper className='col-md-8 paper'>
                </Paper>
        </div>
    )
}

// export default withRouter(connect()(App))
export default withStyles(styles)(App);