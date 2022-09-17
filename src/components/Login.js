import { useContext, useState } from 'react';
import RosterContext from '../store/roster-context';
import Button from 'react-bootstrap/Button';
import { auth, provider, db } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";


function Login() {
    const { uid, roster, setUID, setRoster } = useContext(RosterContext);
    const [email, setEmail] = useState(""); // Just to display to user who's logged in

    function signIn() {
        signInWithPopup(auth, provider).then((result) => {
            const userid = result.user.uid;
            setEmail(result.user.email);
            setUID(userid);
            localStorage.setItem("isAuth", true); // Local storage caches auth status
            
            // Creates a ref to the doc in firestore db
            // Document names are the uid's of the user
            const docRef = doc(db, "users", userid);
            getDoc(docRef).then((docSS) => {
                // docSS == documentSnapshot
                if (docSS.exists()) {
                    // User already exists in the db -> fetch their roster
                    const rosterData = docSS.data();
                    setRoster(rosterData.roster);
                } else {
                    // New user -> upload existing roster to db
                    setDoc(docRef, { roster });
                }
            });
        });
    }

    function logout() {
        signOut(auth).then(() => {
            setUID("");
            setEmail("");
            localStorage.setItem("isAuth", false);
        });
    }

    // if signed-in
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
    
    // if not signed in
    return (
        <Button onClick={signIn} >Sign in with Google</Button>
    );
}

export default Login;