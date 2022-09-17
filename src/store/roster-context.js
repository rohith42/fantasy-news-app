import { createContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase-config';

const RosterContext = createContext();

export function RosterProvider({ children }) {
    const [roster, setRoster] = useState([]);     // roster of players/teams
    const [selected, setSelected] = useState(""); // selected player/team
    const [uid, setUID] = useState("");           // UID of the user
    
    function addToRoster(newMember) {
        setRoster((prevRoster) => {
            const newRoster = [...prevRoster, newMember];
            // if user's signed in, updates firestore with new roster
            if (uid) {
                const docRef = doc(db, 'users', uid);
                setDoc(docRef, { roster: newRoster });
            }
            return newRoster;
        });
    }

    function deleteFromRoster(toDelete) {
        setRoster((prevRoster) => {
            const newRoster = prevRoster.filter(player => player !== toDelete);
            // if user's signed in, updates firestore with new roster
            if (uid) {
                const docRef = doc(db, 'users', uid);
                setDoc(docRef, { roster: newRoster });
            }
            return newRoster;
        });
        setSelected("");
    }
    
    return (
        <RosterContext.Provider 
            value={{ selected, uid, roster,
                setSelected, setUID, addToRoster, deleteFromRoster, setRoster 
            }} 
        >
            {children}
        </RosterContext.Provider>
    );
}


export default RosterContext;