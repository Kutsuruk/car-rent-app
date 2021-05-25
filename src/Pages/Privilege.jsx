import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import PrivilegeType from "../Components/PrivilegeType";
import PrivilegeRewarding from "../Components/PrivilegeRewarding";
import PrivilegeTable from "../Components/PrivilegeTable";

class Privilege extends Component {
    render() {
        return (
            <Container>
                <PrivilegeType />
                <PrivilegeTable />
                <PrivilegeRewarding />
            </Container>
        );
    }
}

export default Privilege;