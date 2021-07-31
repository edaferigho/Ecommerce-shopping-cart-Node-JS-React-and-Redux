import React from 'react'

import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  
  return (
    <Router>
      {/*Navbar */}
      <Navbar clickevent={()=>setSideToggle(true)}/>
      {/* SideDrawer*/}
      <SideDrawer show={sideToggle}/>
      {/* Backdrop*/}
      <Backdrop show={sideToggle } clickevent={()=>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen }/>
          <Route exact path="/product/:id" component={ProductScreen }/>
          <Route exact path="/cart" component={CartScreen }/>
        </Switch>
      </main>
    </Router>
  )
}

export default App
