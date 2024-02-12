import './App.css';
import Overlay from './Overlay';
import Particles from './particles';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="overlay-container">
        <Overlay />
      </div>
      <Particles />
    </div>
  );
}

export default App;
