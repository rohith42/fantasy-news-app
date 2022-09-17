import { createContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase-config';

const RosterContext = createContext();

export function RosterProvider({ children }) {
    const [roster, setRoster] = useState([]);
    const [selected, setSelected] = useState("");
    const [uid, setUID] = useState("");
    
    function addToRoster(newMember) {
        setRoster((prevRoster) => {
            const newRoster = [...prevRoster, newMember];
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