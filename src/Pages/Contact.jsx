import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import ContactForm from "../Components/ContactForm";

class Contact extends Component {
    render() {
        return (
            <Container>
                <ContactForm />
            </Container>
        );
    }
}

export default Contact;