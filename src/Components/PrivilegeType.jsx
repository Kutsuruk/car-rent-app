import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import privilege from '../Images/privilege.jpeg'

class PrivilegeType extends Component {
    render() {
        return (
            <Container>
                <Container className={'pt-5'}>
                    <Row>
                        <Col sm="12" md="7" lg="7">
                            <img
                                src={privilege}
                                className={'main_img border-secondary'}
                                alt="Privilege"
                            />
                        </Col>
                        <Col sm="12" md="5" lg="5" className={'pt-3'}>
                            <h4 className={'text-center font-weight-bold'}>Privilege Loyalty program</h4>
                            <p className={'text-justify'}>
                                The program has a 4 tier level structure : Club, Executive, Elite & Elite VIP.<br />
                                Customers progress through the program depending of the number of rentals and/or number
                                of rental days. Key benefits include faster vehicle pick-up process, member-only
                                discounts, plus rewards such as value off coupons and free weekend rentals.<br />
                                And save on personal rentals of 3+ days with Privilege member-only discount! *
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default PrivilegeType;