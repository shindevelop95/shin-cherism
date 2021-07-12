import './App.css';
import React,{useState,useEffect} from 'react';
import {commerce} from './lib/commerce'; 
import { About,Feature,Footer,Landing,Nav,Products,Slides } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product">
            <Products/>
          </Route>
          <Route path="/">
            <Nav />
          <Landing />
          <Slides/>
          <About/>
          <Feature/>
          <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
