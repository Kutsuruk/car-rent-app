import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

import carousel_1 from '../Images/carousel_1.jpeg'
import carousel_2 from '../Images/carousel_2.jpeg'
import carousel_3 from '../Images/carousel_3.jpeg'
import carousel_4 from '../Images/carousel_4.jpeg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        src={carousel_1}
                        className="d-block w-100"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Premium class cars</h3>
                        <p>You can rent any premium cars for comfortable trip.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        src={carousel_2}
                        className="d-block w-100"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Good working web site</h3>
                        <p>Our developer team improve site every day for fast working.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={carousel_3}
                        className="d-block w-100"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>You can find us everywhere</h3>
                        <p>We are now working in more than 7 countries and this is not the end.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={carousel_4}
                        className="d-block w-100"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Millions satisfied clients</h3>
                        <p>We give best services and our client always satisfied.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;