import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import AboutHeader from "../Components/AboutHeader";
import AboutModern from "../Components/AboutModern";
import AboutRental from "../Components/AboutRental";
import AboutLoyalty from "../Components/AboutLoyalty";

class About extends Component {
    render() {
        return (
            <Container>
                <AboutHeader />
                <AboutModern />
                <AboutRental />
                <AboutLoyalty />
            </Container>
        );
    }
}

export default About;