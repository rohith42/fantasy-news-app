import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './components/Players';
import News from './components/News';
import { RosterProvider } from './store/roster-context';

function App() {
  return (
    <div className="App">
      <RosterProvider>
        <Header />

        <div className='main-container'>
          <Players />
          <News />
        </div>
        
        <Footer />
      </RosterProvider>
    </div>
  );
}

export default App;
