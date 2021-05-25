import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FcApproval, FcDebt, FcHighPriority} from "react-icons/all";

class CarInfo extends Component {
    render() {
        return (
            <Container>
                <h2 className={'text-center pt-4 pb-3'}>About our privilege</h2>
                <Row>
                    <Col size="6" sm="4" className='text-center'>
                        <Card className={'car_card'}>
                            <FcApproval size={80} />
                            <Card.Body>
                                <Card.Title>24h pick up at airport or your hotel</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col size="6" sm="4" className='text-center'>
                        <Card className={'car_card'}>
                            <FcHighPriority size={80} />
                            <Card.Body>
                                <Card.Title>Full insurance of any incidents and stolen</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col size="6" sm="4" className='text-center'>
                        <Card className={'car_card'}>
                            <FcDebt size={80} />
                            <Card.Body>
                                <Card.Title>No credit card required to reserve your car</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CarInfo;