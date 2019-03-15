import React from 'react'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


import { fetchCustomerChart } from '../actions/actions'

const mapStateToProps = state => {
    return {
        customers: state.customerChart,
    };
};

am4core.useTheme(am4themes_animated);

const CustomerChart = (props) => {

    useEffect(() => {
        props.dispatch(fetchCustomerChart())
        setChar()
    }, [])

    useEffect(() => {
      if(props.customers.length > 0) {
        setChar()
      }
  }, [props.customers])

    const setChar = () => {
        let chart = am4core.create("chartdiv", am4charts.XYChart3D);

            // Add data
        if(!props.customers) {
          return
        }
        
        let _chartData = props.customers.splice(0,4).map(customer => {
           customer.color = customer.rain_date != null ? am4core.color("red") : am4core.color("green") 
           return customer;
         });

        chart.data  =  _chartData;

        // console.log(chartData)
        // chart.data = props.customers;
          // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.numberFormatter.numberFormat = "#";
        categoryAxis.renderer.inversed = false;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis()); 

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueY = "num_employees";
        series.dataFields.categoryX = "name";
        series.name = "Income";
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.tooltipText = "{valueX}";
        series.columns.template.column3D.stroke = am4core.color("#fff");
        series.columns.template.column3D.strokeOpacity = 0.2;

    }
    
    return (
        <div className='col-xs-10' >
             <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
    )
}

// export default withRouter(connect()(CustomerForm))
export default connect(mapStateToProps)(CustomerChart);