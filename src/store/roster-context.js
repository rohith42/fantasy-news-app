import { createContext, useState } from "react";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

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

    // Updates the current roster with the roster fetched from firebase for this user
    async function downloadRoster(id) {
        console.log("Fetching roster...");
        if (id) {
            try {
                const docRef = doc(db, `/users/${id}`);
                const document = await getDoc(docRef);
                const roster = document.data(); // roster.roster is the actual array
                setRoster(roster.roster);
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    return (
        <RosterContext.Provider 
            value={{ selected, roster, uid,
                addToRoster, deleteFromRoster, updateSelected, setUID, downloadRoster 
            }} 
        >
            {children}
        </RosterContext.Provider>
    );
}


export default RosterContext;