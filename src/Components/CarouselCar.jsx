import React, {Component} from 'react';
import {Carousel, Col, Nav, Row, Tab} from "react-bootstrap";

import skoda from "../Images/skoda_economy.jpeg";
import passat from "../Images/passat_economy.jpeg";
import camry from "../Images/camry_economy.jpeg";
import audi4 from '../Images/audi_econom.jpeg';

import bmw from "../Images/luxury_bmw.jpeg";
import mercedes from "../Images/luxury_mercedes.jpeg";
import porsche from "../Images/luxury_porsche.jpeg";
import audi8 from '../Images/luxury_audi.jpeg';

import bmw_e from "../Images/bmw_electric.jpeg";
import tesla from "../Images/tesla_electric.jpeg";
import mini from "../Images/mini_electric.jpeg";
import nissan from '../Images/nissan_electric.jpeg';

import vito from "../Images/vito_van.jpeg";
import transporter from "../Images/transporter_van.jpeg";
import chrysler from "../Images/chrysler_van.jpeg";
import ford from '../Images/ford_van.jpeg';

class CarouselCar extends Component {
    render() {
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="economy">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="economy">Economy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="luxury">Luxury</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="electric">Electric</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="van">Van</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="economy">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={skoda}
                                                alt="Skoda car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={passat}
                                                alt="Volkswagen car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={camry}
                                                alt="Toyota car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={audi4}
                                                alt="Audi car"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="luxury">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={bmw}
                                                alt="Bmw car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={mercedes}
                                                alt="Mercedes car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={porsche}
                                                alt="Porsche car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={audi8}
                                                alt="Audi car"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="electric">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={bmw_e}
                                                alt="Bmw-e car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={tesla}
                                                alt="Tesla car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={mini}
                                                alt="Mini car"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={nissan}
                                                alt="Nissan car"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="van">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={vito}
                                                alt="Vito van"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={transporter}
                                                alt="Transporter van"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={chrysler}
                                                alt="Chrysler van"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className={'car_carousel_img'}
                                                src={ford}
                                                alt="Ford van"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default CarouselCar;