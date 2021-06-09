import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import {Bar} from 'react-chartjs-2';

class LocationChart extends Component {
    render() {
        return (
            <Container className={'bg-light'}>
                <h2 className={'pb-4 text-center'}>
                    Estimated hotel price in Stockholm
                </h2>
                <Bar
                    data={{
                        labels: [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December',
                        ],
                        datasets: [{
                            label: 'Hotel price by month',
                            data: [
                                100,
                                150,
                                112,
                                110,
                                134,
                                121,
                                85,
                                105,
                                111,
                                131,
                                97,
                                102,
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.3)',
                                'rgba(54, 162, 235, 0.3)',
                                'rgba(255, 206, 86, 0.3)',
                                'rgba(75, 192, 192, 0.3)',
                                'rgba(153, 102, 255, 0.3)',
                                'rgba(255, 159, 30, 0.3)',
                                'rgba(75, 12, 192, 0.3)',
                                'rgba(5, 50, 140, 0.3)',
                                'rgba(75, 192, 102, 0.3)',
                                'rgba(15, 102, 382, 0.3)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 30, 1)',
                                'rgba(75, 12, 192, 1)',
                                'rgba(5, 50, 140, 1)',
                                'rgba(75, 192, 102, 1)',
                                'rgba(15, 102, 382, 1)',
                            ],
                            borderWidth: 2
                        }]
                    }}
                    width={600}
                    height={300}
                />
            </Container>
        );
    }
}

export default LocationChart;