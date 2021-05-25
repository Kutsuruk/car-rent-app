import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import CarouselCar from "../Components/CarouselCar";
import CarInfo from "../Components/CarInfo";
import CarForm from "../Components/CarForm";
import CarTable from "../Components/CarTable";

class Cars extends Component {
    render() {
        return (
            <Container className={'pt-4 bg-light pb-3 mt-5'}>
                <CarouselCar />
                <CarInfo />
                <CarTable />
                <CarForm />
            </Container>
        );
    }
}

export default Cars;