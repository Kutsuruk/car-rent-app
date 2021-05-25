import React, {Component} from 'react';
import {Container, Row, Table} from "react-bootstrap";

class PrivilegeTable extends Component {
    render() {
        return (
            <Container className={'d-none d-sm-block'}>
                <h3 className={'text-center pt-3 pb-3 font-weight-bold'}>Table of Privilege</h3>
                <Row>
                    <Table bordered>
                        <thead className={'bg-warning'}>
                        <tr>
                            <th>Benefit</th>
                            <th>Club</th>
                            <th>Executive</th>
                            <th>Elite</th>
                            <th>Elite VIP</th>
                        </tr>
                        </thead>
                        <tbody className={'text-center'}>
                        <tr>
                            <td>Faster vehicle pick-up</td>
                            <td>🟢</td>
                            <td>⚫️</td>
                            <td>🟠</td>
                            <td>🟡</td>
                        </tr>
                        <tr>
                            <td>Secured booking</td>
                            <td>🟢</td>
                            <td>⚫️</td>
                            <td>🟠</td>
                            <td>🟡</td>
                        </tr>
                        <tr>
                            <td>Exclusive special offers</td>
                            <td>🟢</td>
                            <td>⚫️</td>
                            <td>🟠</td>
                            <td>🟡</td>
                        </tr>
                        <tr>
                            <td>Up to 15% off at all Accor hotels</td>
                            <td>🟢</td>
                            <td>⚫️</td>
                            <td>🟠</td>
                            <td>🟡</td>
                        </tr>
                        <tr>
                            <td>Free weekend after 3rd rental</td>
                            <td>🟢</td>
                            <td>⚫️</td>
                            <td>🟠</td>
                            <td>🟡</td>
                        </tr>
                        <tr>
                            <td>Value off coupons</td>
                            <td>€10<br />(after 2nd rental)</td>
                            <td>€20<br />(after 5th rental)</td>
                            <td>€30<br />(after 5th rental)</td>
                            <td>€30<br />(after 4th rental)</td>
                        </tr>
                        <tr>
                            <td>Free weekend on status upgrade</td>
                            <td>️</td>
                            <td>⚫</td>
                            <td>🟠</td>
                            <td>🟡</td>
                        </tr>
                        <tr>
                            <td>Complimentary car upgrade</td>
                            <td></td>
                            <td>Single</td>
                            <td>Double</td>
                            <td>Double</td>
                        </tr>
                        <tr>
                            <td>Additional driver</td>
                            <td></td>
                            <td></td>
                            <td>🟠</td>
                            <td>🟡</td>
                        </tr>
                        <tr>
                            <td>One year Priority Pass membership for airport lounges</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>🟡</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default PrivilegeTable;