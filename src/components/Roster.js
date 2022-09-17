import React, { useContext } from "react";
import RosterContext from "../store/roster-context";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import RosterItem from "./UI/RosterItem";

function Roster () {
    const { roster } = useContext(RosterContext);

    // Default output if nothing in roster
    if (roster.length === 0) {
        return (<p>Add a player or a team to get started</p>);
    }

    return (
        <Container fluid >
            <ListGroup >
                {roster.map((item, index) => <RosterItem name={item} key={item + index}/>)}
            </ListGroup>
            <Form.Text className="text-muted" >
                Double-click an item to delete it from the roster 
            </Form.Text>
        </Container>    
    );
}

export default Roster;