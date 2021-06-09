import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

import old_town from "../Images/old_town.jpeg";
import kayaking from "../Images/kayaking.jpeg";
import food from "../Images/food.jpeg";
import hiking from "../Images/hiking.jpeg";

class LocationDesc extends Component {
    render() {
        return (
            <Container className={'bg-light'}>
                <Container className={'pt-2 pb-5'}>
                    <h3 className={'pt-4 pb-4 text-center'}>
                        Top activities & attractions in Stockholm
                    </h3>
                    <Row xs={1} md={2} className="g-4">
                        <Col className={'pb-4'}>
                            <Card>
                                <Card.Img variant="top" src={old_town} />
                                <Card.Body>
                                    <Card.Title>Stockholm Old Town Walk</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className={'pb-4'}>
                            <Card>
                                <Card.Img variant="top" src={kayaking} />
                                <Card.Body>
                                    <Card.Title>Kayaking Tour on Lake</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className={'pb-4'}>
                            <Card>
                                <Card.Img variant="top" src={food} />
                                <Card.Body>
                                    <Card.Title>Discover the Unique Flavour of Food</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={hiking} />
                                <Card.Body>
                                    <Card.Title>Hiking</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default LocationDesc;