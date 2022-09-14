import { createContext, useState } from "react";

const RosterContext = createContext();

export function RosterProvider({ children }) {
    const [roster, setRoster] = useState([]);
    const [selected, setSelected] = useState("");
    
    function addToRoster(newMember) {
        setRoster((prevRoster) => [...prevRoster, newMember]);
    }

    function deleteFromRoster(toDelete) {
        setRoster((prevRoster) => prevRoster.filter(player => player !== toDelete));
    }

    function updateSelected(newSelection) {
        console.log(`Updating selected to ${newSelection}...`);
        setSelected(newSelection);
    }
    
    return (
        <RosterContext.Provider 
            value={{ selected, roster, addToRoster, deleteFromRoster, updateSelected }} 
        >
            {children}
        </RosterContext.Provider>
    );
}


export default RosterContext;