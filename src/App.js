import logo from './logo.svg';
import './App.css';
import Addtext from './components/Addtext';
import Displaydata from './components/Displaydata';

function App() {
  return (
    <div className="App">
      <header className="">
     <Addtext/>
     <Displaydata/>
      </header>
    </div>
  );
}

export default App;
