import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RosterProvider } from './store/roster-context';
import Header from './components/Header';
import Players from './components/Players';
import News from './components/News';
import Footer from './components/Footer';

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
