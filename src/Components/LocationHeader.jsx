import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import city from '../Images/location_city.jpeg'

class LocationHeader extends Component {
    render() {
        return (
            <Container className={'bg-light pt-3 mt-4 pb-3'}>
                <Container className={'header__location__container'}>
                    <img
                        src={city}
                        className={'header__city'}
                        alt="Location city"
                    />
                    <div className={'header__location'}>
                        <h3>Discover the best of Sweden</h3>
                        <p>
                            From tours and day trips to events and attractions, there are things to do in Stockholm for
                            every traveler.
                        </p>
                    </div>
                </Container>
            </Container>
        );
    }
}

export default LocationHeader;