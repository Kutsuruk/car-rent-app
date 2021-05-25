import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import main_img from '../Images/main_img.jpeg'
import {FcApproval, FcCalendar, FcCustomerSupport} from "react-icons/all";

class MainInfo extends Component {
    render() {
        return (
            <Container className={'main__container__info bg-light pt-2 mt-5' }>
                <Container className={'first__container__info'}>
                    <h2 className={'text-center pt-4 pb-3'}>Welcome to Hertz</h2>
                    <Row>
                        <Col size="12" sm="12" md="7" lg="7">
                            <img
                                src={main_img}
                                className={'main_img border-secondary'}
                                alt="Main car"
                            />
                        </Col>
                        <Col size="6" sm="12" md="5" lg="5">
                            <h4 className={'text-center'}>Rent a Car with Hertz</h4>
                            <p className={'main_info_p'}>
                                Whether you’re looking for a long-term or one-day rental. We offers a broad range of
                                car categories from which renters can choose, including standard and premium sedans,
                                multi-seater vans, standard and premium SUVs, and even convertibles and exotic cars in
                                some locations. Once you’ve chosen the vehicle, you can personalize it. For families, child seats are available.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2 className={'text-center pt-4 pb-3'}>Services</h2>
                    <Row>
                        <Col size="6" sm="4" className='text-center'>
                            <FcCustomerSupport size={80} />
                            <h4>Our support work 24 hours</h4>
                            <p>Write to support team if you have any questions or problem</p>
                        </Col>
                        <Col size="6" sm="4" className='text-center'>
                            <FcCalendar size={80} />
                            <h4>Manage our booking online</h4>
                            <p>Cancel or amend your car dates online quickly and easily</p>
                        </Col>
                        <Col size="6" sm="4" className='text-center'>
                            <FcApproval size={80} />
                            <h4>Rated by more than 2 mil clients</h4>
                            <p>We ask uor clients rate the company that provide better services</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default MainInfo;