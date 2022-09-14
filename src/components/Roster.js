import React, { useContext, useEffect, useState } from "react";
import RosterContext from "../store/roster-context";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import RosterItem from "./UI/RosterItem";


function Roster () {
    const { roster } = useContext(RosterContext);

    if (roster.length === 0) {
        return (<p>Add a player or a team to get started</p>);
    }

    return (
        <Container fluid >
            <ListGroup >
                {roster.map((item, index) => <RosterItem name={item} key={item + index}/>)}
            </ListGroup>
        </Container>    
    );
}

export default Roster;