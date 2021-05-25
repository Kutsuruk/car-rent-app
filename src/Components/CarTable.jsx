import React, {useState} from 'react';
import {Button, Collapse, Container, Table} from "react-bootstrap";

function CarTable() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Button
                className={'show_btn mt-5'}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Click for more cars
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Container className={'car_table'}>
                        <h2 className={'text-center pt-2 pb-3'}>About our cars</h2>
                        <Table bordered hover>
                            <thead className={'bg-warning'}>
                            <tr>
                                <th>#</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Body Type</th>
                                <th>Cost</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={'bg-secondary'}>
                                <td colSpan={5} className={'text-center font-weight-bold'}>Economy</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Skoda</td>
                                <td>Octavia</td>
                                <td>Sedan</td>
                                <td>15&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Volkswagen</td>
                                <td>Passat</td>
                                <td>Wagon</td>
                                <td>16&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Toyota</td>
                                <td>Camry</td>
                                <td>Sedan</td>
                                <td>18&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Audi</td>
                                <td>A3</td>
                                <td>Sedan</td>
                                <td>25&#8364;/hour</td>
                            </tr>
                            <tr className={'bg-secondary'}>
                                <td colSpan={5} className={'text-center font-weight-bold'}>Luxury</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>BMW</td>
                                <td>750l</td>
                                <td>Sedan</td>
                                <td>55&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mercedes-Benz</td>
                                <td>E223</td>
                                <td>Sedan</td>
                                <td>50&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Porsche</td>
                                <td>Panamera</td>
                                <td>Coupe</td>
                                <td>60&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Audi</td>
                                <td>A8</td>
                                <td>Sedan</td>
                                <td>46&#8364;/hour</td>
                            </tr>
                            <tr className={'bg-secondary'}>
                                <td colSpan={5} className={'text-center font-weight-bold'}>Electric</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tesla</td>
                                <td>Model S</td>
                                <td>Sedan</td>
                                <td>35&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mini</td>
                                <td>Electric</td>
                                <td>Coupe</td>
                                <td>32&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>BMW</td>
                                <td>i3</td>
                                <td>Coupe</td>
                                <td>29&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Nissan</td>
                                <td>Leaf</td>
                                <td>Hatchback</td>
                                <td>25&#8364;/hour</td>
                            </tr>
                            <tr className={'bg-secondary'}>
                                <td colSpan={5} className={'text-center font-weight-bold'}>Van</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mercedes-Benz</td>
                                <td>Vito</td>
                                <td>Van</td>
                                <td>45&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Volkswagen</td>
                                <td>Transporter 6</td>
                                <td>Van</td>
                                <td>45&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Chrysler</td>
                                <td>Pacifica</td>
                                <td>Van</td>
                                <td>45&#8364;/hour</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Ford</td>
                                <td>Transit</td>
                                <td>Van</td>
                                <td>45&#8364;/hour</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </Collapse>
        </Container>
    );
}

export default CarTable


