import '../App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile';

function Header () {
    return (
        <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand>Fantasy Football News Applet</Navbar.Brand>
                <Navbar.Text>
                    <Profile />
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Header;