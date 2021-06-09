import React, {Component} from 'react';
import LocationHeader from "../Components/LocationHeader";
import {Container} from "react-bootstrap";
import LocationDesc from "../Components/LocationDesc";
import LocationChart from "../Components/LocationChart";

class Location extends Component {
    render() {
        return (
            <Container>
                <LocationHeader />
                <LocationDesc />
                <LocationChart />
            </Container>
        );
    }
}

export default Location;