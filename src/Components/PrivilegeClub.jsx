import React, {useState} from 'react';
import {Button, Container, Modal} from "react-bootstrap";

function PrivilegeClub() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Button variant="primary" onClick={handleShow}>
                Read more
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Club Privilege</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className={'club_list'}>
                        <li>🟢 -10% Members' discount on our public rate for a car or van rental of 3+ days for your personal use</li>
                        <li>🟢 Faster vehicle pick up process</li>
                        <li>🟢 Secured booking - we reserve your car and keep it even if you are delayed</li>
                        <li>🟢 After just 2 rentals, receive a 10€ value off coupon</li>
                        <li>🟢 After your third rental, you'll receive a free weekend</li>
                        <li>🟢 Up to 15% discount at all participating Accor hotels locations</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default PrivilegeClub;