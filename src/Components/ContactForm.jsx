import {useState} from "react";
import emailjs from 'emailjs-com';
import {Button, Col, Container, Form, InputGroup} from "react-bootstrap";

function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t4aflb8', 'template_vzp9jec', e.target, 'user_0BrQ1O55LNJg4BF4168Lg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <Container className={'pt-3'}>
            <h2 className={'text-center font-weight-bold pt-2 pb-5'}>Contact Form</h2>
            <Form noValidate validated={validated} onSubmit={sendEmail} className={'pt-4'}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="surname"
                            placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="mail"
                                placeholder="E-mail"
                                aria-describedby="inputGroupPrepend"
                                name="email"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please write a E-mail.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            name="city"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Country"
                            name="country"
                            required
                        />
                        <Form.Control.Feedback
                            type="invalid"
                            name="type"
                        >
                            Please provide a valid country.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            name="zip"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom06">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Message'
                            as="textarea" rows={5}
                            cols={'50'}
                            name="message"
                            required
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom07">
                        <Form.File id="exampleFormControlFile1" label="File input" />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </Container>
    );
}

export default ContactForm;