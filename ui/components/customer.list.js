import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Import React Table
import ReactTable from "react-table";

import 'react-table/react-table.css';
import 'react-tabs/style/react-tabs.less';

const CustomerList = (props) => {

    let initialCustomers =  [
        {
            "name": "Company",
            "person_contact": "Orville",
            "telephone": "1235",
            "location": "Angeles,Ph",
            "num_employees": 1,
            "rain_date": "2019-03-14"
        },
        {
            "name": "Customer from OKC",
            "person_contact": "Orville",
            "telephone": "1235",
            "location": "Oklahoma,US",
            "num_employees": 1,
            "rain_date": "2019-03-14"
        },
        {
            "name": "Customer from Tokyo",
            "person_contact": "Orville",
            "telephone": "123",
            "location": "Tokyo,JP",
            "num_employees": 2,
            "rain_date": "2019-03-10"
        }
    ]

    const [customers, setOrders] = useState(initialCustomers)

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
        //   {
        //     Header: "Select To Deliver",
        //     accessor: "",
        //     Cell : row => (
        //     <input type="checkbox" onChange={() => selectSelectedData(row.original)} name="" value=""/>
        //     )
        //   }
        ]
      }];

    
    const filtered = null;

    return (
        <div className='row col-xs-12' >
            <ReactTable
                    data={filtered || customers}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
        </div>
    )
}

// export default withRouter(connect()(CustomerForm))
export default connect()(CustomerList);