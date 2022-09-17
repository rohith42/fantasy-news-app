import React, { useContext, useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import RosterContext from "../../store/roster-context";

function RosterItem ({ name }) {
    const [active, setActive] = useState(false);
    const { selected, setSelected, deleteFromRoster } = useContext(RosterContext);

    useEffect(() => {
        if (selected === name) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [selected, name]);

    function handleClick() {
        setSelected(name);
    }

    function handleDoubleClick() {
        deleteFromRoster(name);
    }

    return (
        <ListGroup.Item active={active} action onClick={handleClick} onDoubleClick={handleDoubleClick} >
            {name.toUpperCase()}
        </ListGroup.Item>
    );
}

export default RosterItem;