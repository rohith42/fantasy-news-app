import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './components/Players';
import News from './components/News';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <Header />

      <div className='main-container'>
        <Players />
        <News selected={selected} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
