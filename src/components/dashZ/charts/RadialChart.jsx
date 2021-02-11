import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class RadialChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                labels: ['Reading', 'Speaking', 'Writing', 'Listening'],
                title: {
                    text: 'Communication Skill of Last PTE Exam',
                    offsetX: 140
                },
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249
                            }
                        }
                    }
                }
            },
            series: [44, 55, 67, 53],
        }
    }

    render() {
        return (
            <div id="radialChart">
                <ReactApexChart  options={this.state.options} series={this.state.series} type="radialBar" height="350" />
            </div>
        );
    }
}
