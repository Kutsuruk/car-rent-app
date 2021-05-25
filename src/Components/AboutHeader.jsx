import React, {Component} from 'react';
import {Card, Container} from "react-bootstrap";
import about_header from '../Images/about_header.jpeg'

class AboutHeader extends Component {
    render() {
        return (
            <Container className={'bg-light pt-3 mt-4 pb-3'}>
                <Container className={'first__container__info'}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={about_header} className={'w-100'} alt="About" />
                        <Card.ImgOverlay>
                            <Card.Title className={'about__title'}>
                                <h2 className={'text-warning'}>About us</h2>
                            </Card.Title>
                            <Card.Text className={'about__text'}>
                                <p className={'text-warning'}>Learn more about Hertz</p>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Container>
            </Container>
        );
    }
}

export default AboutHeader;