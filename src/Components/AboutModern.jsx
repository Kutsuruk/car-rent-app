import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import modern_cars from '../Images/about_modern.jpeg';

class AboutModern extends Component {
    render() {
        return (
            <Container className={'bg-light pt-3 mt-4 pb-3'}>
                <Row>
                    <Col size="12" sm="12" md="7" lg="7">
                        <h3 className={'font-weight-bold pl-3 mt-2'}>Modern fleet & extensive network</h3>
                        <p className={'pl-3 text__desc'}>
                            From specialty vehicles to cargo vans, we offer a large spectrum of hire options.
                        </p>
                    </Col>
                    <Col size="6" sm="12" md="5" lg="5">
                        <img
                            src={modern_cars}
                            className={'w-100'}
                            alt="Modern cars"
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutModern;