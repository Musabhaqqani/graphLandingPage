import './App.css';
import Overlay from './Overlay';
import Particles from './particles';


function App() {
  return (
    <div className="App">
      <div className="overlay-container">
        <Overlay />
      </div>
      <Particles />
    </div>
  );
}

export default App;
