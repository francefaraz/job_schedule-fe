import logo from './logo.svg';
import './App.css';
import Addtext from './components/Addtext';
import Displaydata from './components/Displaydata';
import Searchworkers from './components/Searchworkers'

function App() {
  return (
    <div className="App">
      <header className="">
     <Addtext/>
     <Displaydata/>
     <Searchworkers/>
      </header>
    </div>
  );
}

export default App;
