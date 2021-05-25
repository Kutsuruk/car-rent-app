import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loyalty_card from "../Images/loyalty_program.png";

class AboutLoyalty extends Component {
    render() {
        return (
            <Container className={'bg-light pt-3 mt-4 pb-3'}>
                <Row>
                    <Col size="12" sm="12" md="7" lg="7">
                        <h3 className={'font-weight-bold pl-3 mt-2'}>Rewarding your loyalty</h3>
                        <p className={'pl-3 text__desc'}>
                            Hertz Privilege programme is our way of saying: “thank you”.
                        </p>
                    </Col>
                    <Col size="6" sm="12" md="5" lg="5">
                        <img
                            src={loyalty_card}
                            className={'w-100'}
                            alt="Modern cars"
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutLoyalty;