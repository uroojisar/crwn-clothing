import React from 'react';
import HomePage from './Pages/homepage/homepage.component';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
