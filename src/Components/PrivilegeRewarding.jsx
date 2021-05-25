import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AiTwotoneCheckCircle} from "react-icons/all";
import PrivilegeClub from "./PrivilegeClub";
import PrivilegeExecutive from "./PrivilegeExecutive";
import PrivilegeElite from "./PrivilegeElite";
import PrivilegeEliteVIP from "./PrivilegeEliteVIP";

class PrivilegeRewarding extends Component {
    render() {
        return (
            <Container>
                <h2 className={'text-center pt-4 pb-3'}>Get more information on each tier level</h2>
                <Row>
                    <Col size="6" sm="12" md='6' lg='3' className='text-center'>
                        <AiTwotoneCheckCircle className={'mt-2'} color={'green'} size={80} />
                        <h4 className={'pt-2 font-weight-bold'}>Privilege Club</h4>
                        <p>Entry level</p>
                        <PrivilegeClub />
                    </Col>
                    <Col size="6" sm="12" md='6' lg='3' className='text-center'>
                        <AiTwotoneCheckCircle className={'mt-2'} size={80} />
                        <h4 className={'pt-2 font-weight-bold'}>Privilege Executive</h4>
                        <p>From 10 rentals or 40 rental days</p>
                        <PrivilegeExecutive />
                    </Col>
                    <Col size="6" sm="12" md='6' lg='3' className='text-center'>
                        <AiTwotoneCheckCircle className={'mt-2'} color={'orange'} size={80} />
                        <h4 className={'pt-2 font-weight-bold'}>Privilege Elite</h4>
                        <p>From 25 rentals or 85 rental days</p>
                        <PrivilegeElite />
                    </Col>
                    <Col size="6" sm="12" md='6' lg='3' className='text-center'>
                        <AiTwotoneCheckCircle className={'mt-2'} color={'yellow'} size={80} />
                        <h4 className={'pt-2 font-weight-bold'}>Privilege Elite VIP</h4>
                        <p>From 40 rentals or 130 rental days</p>
                        <PrivilegeEliteVIP />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PrivilegeRewarding;