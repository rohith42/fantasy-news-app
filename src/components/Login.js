import { useContext, useState } from 'react';
import RosterContext from '../store/roster-context';
import Button from 'react-bootstrap/Button';
import { auth, provider, db } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";


function Login() {
    const { uid, roster, setUID, setRoster } = useContext(RosterContext);
    const [email, setEmail] = useState("");

    function signIn() {
        signInWithPopup(auth, provider).then((result) => {
            const userid = result.user.uid;
            setEmail(result.user.email);
            setUID(userid);
            localStorage.setItem("isAuth", true);
            const docRef = doc(db, "users", userid);
            getDoc(docRef).then((docSS) => {
                if (docSS.exists()) {
                    // User already exists in the db -> fetch their roster
                    const rosterData = docSS.data();
                    setRoster(rosterData.roster);
                } else {
                    // New user -> upload existing roster to db
                    console.log("Welcome new user! Storing your roster in the db...");
                    setDoc(docRef, { roster }).then(() => {
                        console.log(`Stored your roster in firestore under ${userid}`);
                    });
                }
            });
        });
    }

    function logout() {
        signOut(auth).then(() => {
            console.log(`Logged out ${uid}...`);
            setUID("");
            setEmail("");
            localStorage.setItem("isAuth", false);
        });
    }

    if (uid) {
        return (
            <div className='logout' >
                <div className='login-text' >
                    <p>Logged in as: {email}</p>
                </div>
                <Button onClick={logout} >Logout</Button>
            </div>
        );
    }
    
    return (
        <Button onClick={signIn} >Sign in with Google</Button>
    );
}

export default Login;