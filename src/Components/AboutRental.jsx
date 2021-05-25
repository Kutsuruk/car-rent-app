import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import prestige_cars from "../Images/prestige_car.jpeg";

class AboutRental extends Component {
    render() {
        return (
            <Container className={'bg-light pt-3 mt-4 pb-3'}>
                <Row>
                    <Col size="6" sm="12" md="5" lg="5">
                        <img
                            src={prestige_cars}
                            className={'w-100'}
                            alt="Modern cars"
                        />
                    </Col>
                    <Col size="12" sm="12" md="7" lg="7">
                        <h3 className={'font-weight-bold pr-3 mt-2'}>Selection Prestige Rental</h3>
                        <p className={'pr-3 text__desc'}>
                            Arrive in style with one of our prestige rental cars. Discover our range of executive,
                            luxury and sporty rental cars from the world's leading manufacturers.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutRental;