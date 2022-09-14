import React, { useContext, useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import RosterContext from "../../store/roster-context";

function RosterItem ({ name }) {
    const [active, setActive] = useState(false);
    const { selected, updateSelected } = useContext(RosterContext);

    useEffect(() => {
        if (selected === name) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [selected, name]);

    function handleClick() {
        updateSelected(name);
    }

    return (
        <ListGroup.Item active={active} action onClick={handleClick} className='roster-item' >
            {name.toUpperCase()}
        </ListGroup.Item>
    );
}

export default RosterItem;