import React, {Component} from 'react';
import LocationHeader from "../Components/LocationHeader";
import {Container} from "react-bootstrap";
import LocationDesc from "../Components/LocationDesc";
import LocationChart from "../Components/LocationChart";
import LocationMap from "../Components/LocationMap";

class Location extends Component {
    render() {
        return (
            <Container>
                <LocationHeader />
                <LocationDesc />
                <LocationChart />
                <LocationMap />
            </Container>
        );
    }
}

export default Location;