import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Homepage';
import Navbar from './Pages/Home/Navbar';
function App() {
  return (//aplication function that defines the location of the navigation function and the homepage 
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
          <Route exact path = "/" element = {<Home />}></Route>
          <Route path = "*" element = {<div> 404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
