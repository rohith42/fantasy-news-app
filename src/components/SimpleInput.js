import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import RosterContext from "../store/roster-context";


function SimpleInput() {
    const [enteredText, setEnteredText] = useState("");
    const { addToRoster } = useContext(RosterContext);
    
    function handleChange(evt) {
        setEnteredText(evt.target.value);
    }

    function addPlayer() {
        addToRoster(enteredText.toLowerCase());
        setEnteredText("");
    }
  
    return (
        <InputGroup className="mb-3">
            <Form.Control placeholder="Ex: Russell Wilson" onChange={handleChange} value={enteredText} />
            <Button variant="primary" id="submitbutton-addon" onClick={addPlayer}>Add to Roster</Button>
        </InputGroup>
    );
}


export default SimpleInput;