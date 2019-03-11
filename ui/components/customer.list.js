import React from 'react'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { fetchCustomers } from '../actions/actions' 

import Button from '@material-ui/core/Button';

// Import React Table
import ReactTable from "react-table";

import 'react-table/react-table.css';
import 'react-tabs/style/react-tabs.less';

import { deleteCustomer } from '../actions/actions'

const mapStateToProps = state => {
    return {
        customers: state.customers,
    };
};

const CustomerList = (props) => {

  const [customers, setCustomers] = useState(initialCustomers)

    useEffect(() => {
        console.log('dispatch')
        props.dispatch(fetchCustomers())
    },  []);

    useEffect(() => {
        if (props.customers) {
            setCustomers(props.customers)
        }
    },  [props.customers]);

    const onDelete = (row) => {
        props.dispatch(deleteCustomer(row.original))
    }
    let initialCustomers =  [ ]
    
    const columns = [{
        Header: 'Customer List',
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Person to Contact",
            accessor: "person_contact"
          },
          {
            Header: "Telephone",
            accessor: "telephone"
          },
          {
            Header: "Location",
            accessor: "location"
          },
          {
            Header: "Date of rain",
            accessor: "rain_date"
          },
          {
            Header: "Delete",
            accessor: "",
            style: {
              cursor: "pointer",
              fontSize: 25,
              padding: "0",
              textAlign: "center",
              userSelect: "none"
            },
            Cell : row => (
              <Button color="secondary" onClick={() => onDelete(row)}> Delete </Button>
            )
          }
        ]
      }];
    
    const filtered = null;

    return (
        <div className='row col-xs-12' >
            <ReactTable
                    data={filtered || customers || []}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
        </div>
    )
}

// export default withRouter(connect()(CustomerForm))
export default connect(mapStateToProps)(CustomerList);