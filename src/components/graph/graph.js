import React, { Component } from 'react';
import Chart from "react-google-charts";

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="chart">
                <Chart
                    className = "inventory-chart"
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', this.props.product_name],
                        [0, 0],
                        [1, this.props.week1],
                        [2, this.props.week2],
                        [3, this.props.week3],
                        [4, this.props.week4],
                        [5, this.props.week5],
                        [6, this.props.week6],
                    ]}
                    options={{
                        hAxis: {
                            title: 'Week',
                        },
                        vAxis: {
                            title: 'Quantity',
                        },
                    }}
                
                />
            </div>
        );


    }
}
 
export default Graph;