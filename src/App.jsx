import React, {Component} from 'react'
import CardData from './components/CardData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import './bootstrap.min.css'
import NavBar from './components/NavBar';
import ShowUser from './components/ShowUser';
import Search from './components/Search';
import { render } from '@testing-library/react';
//import {data} from './components/CardData'


/*
class App extends Component () {

  constructor(){
    super()
    this.state={
      data: data,
      searchfield:''
    
    }
  }
  
  render() {
    */

    function App () {

  return (
    <Router>
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/">
          <Search />
           <CardData/>
        </Route>
        <Route path="/showuser">
           <ShowUser/>
        </Route>
      </Switch>
      </div>
    </div>
   </Router>

  );
}



export default App;