import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import {useLoop} from "react-countdown-circle-timer/src/hooks";

export default class BarChart extends Component {
    seriesZ = [
        {
            name: 'Reading',
            data: [13, 14, 10, 11, 8, 6],
        }, {
            name: 'Writing',
            data: [14, 12, 9, 10, 6, 5],
        }, {
            name: 'Speaking',
            data: [32, 35, 30, 22, 25, 19]
        }, {
            name: 'Listening',
            data: [14, 13, 15, 11, 12, 10]
        }];

    categoriesZ = ['08/09/19', '08/15/19', '08/22/19', '09/15/19', '10/10/19', '10/15/19'].reverse();

    getCategories = () => {
        let cats = [];
        for(let i=0; i<this.categoriesZ.length; i++){
            let total = 0;
            this.seriesZ.forEach(dat => total += dat.data[i]);
            this.categoriesZ[i] += " Score: " + total ;
        }
        return this.categoriesZ;
    };

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: 'Communication Skills',
                    offsetX: 130
                },
                xaxis: {
                    categories: this.getCategories(),
                    labels: {
                        formatter: function (val) {
                            return val + " Score"
                        },
                        style: {
                            fontSize: "13px"
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: 'EXAMS',
                        offsetX: 10,
                        offsetY: 0,
                        style: {
                            fontSize: '14px'
                        }
                    },
                    labels:{
                        style:{
                            fontSize:"13px"
                        }
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " Score"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },
            series: this.seriesZ,
        }
    }

    render() {
        return (
            <div id="barChart" className="w-100">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
            </div>
        );
    }
}

