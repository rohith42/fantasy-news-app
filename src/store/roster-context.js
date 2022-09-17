import { createContext, useState } from "react";

const RosterContext = createContext();

export function RosterProvider({ children }) {
    const [roster, setRoster] = useState([]);
    const [selected, setSelected] = useState("");
    const [uid, setUID] = useState("");
    
    function addToRoster(newMember) {
        setRoster((prevRoster) => [...prevRoster, newMember]);
    }

    function deleteFromRoster(toDelete) {
        setRoster((prevRoster) => prevRoster.filter(player => player !== toDelete));
        setSelected("");
    }

    function updateSelected(newSelection) {
        setSelected(newSelection);
    }
    
    return (
        <RosterContext.Provider 
            value={{ selected, roster, uid,
                updateSelected, setUID, addToRoster, deleteFromRoster, setRoster 
            }} 
        >
            {children}
        </RosterContext.Provider>
    );
}


export default RosterContext;