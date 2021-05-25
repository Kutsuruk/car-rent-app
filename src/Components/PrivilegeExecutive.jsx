import React, {useState} from 'react';
import {Button, Container, Modal} from "react-bootstrap";

function PrivilegeExecutive() {
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
                    <Modal.Title>Executive Privilege</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className={'club_list'}>
                        <li>⚫ -10% Members' discount on our public rate for a car or van rental of 3+ days for your personal use</li>
                        <li>⚫ Faster vehicle pick up process</li>
                        <li>⚫ Secured booking - we reserve your car and keep it even if you are delayed</li>
                        <li>⚫ A free weekend as soon as you move to the Executive level</li>
                        <li>⚫ A one car category free upgrade on all your rentals</li>
                        <li>⚫ A 20€ value off coupon after your 5th rental</li>
                        <li>⚫ An additional free weekend after your 3rd rental</li>
                        <li>⚫ Up to 15% discount at all participating Accor hotels locations</li>
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

export default PrivilegeExecutive;