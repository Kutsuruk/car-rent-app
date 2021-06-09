import React from 'react'
import {Container, Form, Nav, Navbar, OverlayTrigger, Tooltip} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import logo from '../Images/logo.png'
import Home from '../Pages/Home'
import Cars from '../Pages/Cars'
import About from '../Pages/About'
import Privilege from '../Pages/Privilege'
import Location from "../Pages/Location"
import Contact from '../Pages/Contact'
import Login from "./Login";

let Header = () => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click for Log in
        </Tooltip>
    );

    return(
        <div>
            <Navbar collapseOnSelect expand={"md"} sticky={'top'} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            className={'logo'}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mr-auto">
                            <Nav.Link href="/cars">Cars</Nav.Link>
                            <Nav.Link href="/privilege">Privilege</Nav.Link>
                            <Nav.Link href="/location">Locations</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Form inline>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Login />
                            </OverlayTrigger>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cars" component={Cars} />
                    <Route exact path="/privilege" component={Privilege} />
                    <Route exact path="/location" component={Location} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    )
}

export default Header