import logo from './logo.svg';
import './App.css';
import Addtext from './components/Addtext';
import Displaydata from './components/Displaydata';
import Searchworkers from './components/Searchworkers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <header className="">
     <Addtext/>
     <Displaydata/>
     <Searchworkers/>
      </header> */}
      <Router>
      {/* <Switch>
          <Route path="/">
            <Addtext />
            <Displaydata />
          </Route>
          <Route path="/search">
            <Searchworkers/>
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        <Routes>
          <Route exact path="/" element={<Addtext/>}/>
          <Route exact path="/search" element={<Searchworkers/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
