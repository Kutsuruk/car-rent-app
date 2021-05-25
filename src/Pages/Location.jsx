import React, {Component} from 'react';
import LocationHeader from "../Components/LocationHeader";
import {Container} from "react-bootstrap";

class Location extends Component {
    render() {
        return (
            <Container>
                <LocationHeader />
            </Container>
        );
    }
}

export default Location;