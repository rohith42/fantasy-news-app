import { useContext, useState } from 'react';
import RosterContext from '../store/roster-context';
import Button from 'react-bootstrap/Button';
import { auth, provider } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';


function Login() {
    const { uid, setUID } = useContext(RosterContext);
    const [email, setEmail] = useState("");

    function signIn() {
        signInWithPopup(auth, provider).then((result) => {
            setEmail(result.user.email);
            setUID(result.user.uid);
            localStorage.setItem("isAuth", true);
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