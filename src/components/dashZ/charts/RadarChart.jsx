import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


export default class RadarChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                labels: ['Grammar', 'Oral Fluency', 'Pronunciation', 'Spelling', 'Vocabulary', 'Written Discourse'],
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColor: '#e9e9e9',
                            fill: {
                                colors: ['#f8f8f8', '#fff']
                            }
                        }
                    }
                },
                title: {
                    text: 'Average Enabling Skills',
                    offsetX: 180
                },
                colors: ['#FF4560'],
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeColor: '#FF4560',
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val
                        }
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function(val, i) {
                            if(i % 2 === 0) {
                                return val
                            } else {
                                return ''
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'PTE Average',
                data: [57, 35, 43, 50, 65, 59],
            }]
        }
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height="350" />
            </div>


        );
    }
}
