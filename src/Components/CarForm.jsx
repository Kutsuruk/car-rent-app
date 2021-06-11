import React, {Component} from "react";
import emailjs from 'emailjs-com';
import {Container, Col, Row, Jumbotron, Form, Button} from "react-bootstrap";
import logo from '../Images/logo.png'

class CarForm extends Component {
    state = {
        name: "",
        surname: "",
        type: "",
        date: "",
    };

    setName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    setSurname = (event) => {
        this.setState({
            surname: event.target.value,
        });
    };

    setCountry = (event) => {
        this.setState({
            country: event.target.value,
        });
    };

    setCity = (event) => {
        this.setState({
            city: event.target.value,
        });
    };

    setDateF = (event) => {
        this.setState({
            dateF: event.target.value,
        });
    };

    setDateT = (event) => {
        this.setState({
            dateT: event.target.value,
        });
    };

    setType = (event) => {
        this.setState({
            type: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, surname, dateF, dateT, type, country, city } = this.state;

        alert(`${type} car was rent by ${name} ${surname}, pick-up date:${dateF} drop-off date:${dateT} in ${country}/${city}`);
    };

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t4aflb8', 'template_0kifisv', e.target, 'user_0BrQ1O55LNJg4BF4168Lg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    render() {
        const { name, surname, dateF, dateT, type, country, city } = this.state;

        return (
            <Container className={'pt-5'}>
                <Row>
                    <Col md={{ span: 7, offset: 3 }}>
                        <Jumbotron>
                            <img src={logo} alt="Logo" width={300} />
                            <p>
                                Are you want to rent a car? Please fill out this
                                simple form with as much of your information as you can
                                provide, and it will be sent directly to us in preparation for
                                your first appointment
                            </p>
                            <Form onSubmit={this.sendEmail}>
                                <Form.Group>
                                    <h2>Car Rent</h2>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="input"
                                        value={name}
                                        placeholder="Name"
                                        onChange={this.setName}
                                        name="name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        type="input"
                                        value={surname}
                                        placeholder="Surname"
                                        onChange={this.setSurname}
                                        name="surname"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="input"
                                        value={country}
                                        placeholder="Country"
                                        onChange={this.setCountry}
                                        name="country"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="input"
                                        value={city}
                                        placeholder="City"
                                        onChange={this.setCity}
                                        name="city"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDate">
                                    <Form.Label>Pick-up date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={dateF}
                                        onChange={this.setDateF}
                                        name="dateF"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDate">
                                    <Form.Label>Drop-off date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={dateT}
                                        onChange={this.setDateT}
                                        name="dateT"
                                        required
                                    />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridBreed">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={type}
                                            onChange={this.setType}
                                            required
                                        >
                                            <option>Choose...</option>
                                            <option>Economy</option>
                                            <option>Luxury</option>
                                            <option>Electric</option>
                                            <option>Van</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridColor">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control placeholder="Enter Color" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridSex">
                                        <Form.Label>Car Body Type</Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Coupe"
                                            name="formHoriRadios"
                                            ids="formHoriRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Sedan"
                                            name="formHoriRadios"
                                            ids="formHoriRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Van"
                                            name="formHoriRadios"
                                            ids="formHoriRadios1"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridAltered">
                                        <Form.Label>Child Seat</Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="formHoriRadios2"
                                            ids="formHoriRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="formHoriRadios2"
                                            ids="formHoriRadios2"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Label>
                                        Please write your comments and suggestions if any
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        name="message"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CarForm;
