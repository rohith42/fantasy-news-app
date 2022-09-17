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
            const docRef = doc(db, 'users', uid);
            setDoc(docRef, { roster: newRoster }).then(() => {
                console.log(`Updated roster under ${uid}`);
            });
            return newRoster;
        });
    }

    function deleteFromRoster(toDelete) {
        setRoster((prevRoster) => {
            const newRoster = prevRoster.filter(player => player !== toDelete);
            const docRef = doc(db, 'users', uid);
            setDoc(docRef, { roster: newRoster }).then(() => {
                console.log(`Updated roster under ${uid}`);
            });
            return newRoster;
        });
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