import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import User from './components/UserProfile/User';
import AddUser from './components/AddUser/AddUser';
import Login from "./components/Login/Login";
// import Navigation from './components/Navigation/Navigation';


const App = () =>  {


  return (
     <BrowserRouter>

      <div className="App">
    

        <Switch>

          <Route path="/register" component={AddUser} />
      <Route path="/login" component={Login} />
       <Route path="/edituser/:id" component={User} />

        </Switch>


      </div>
    </BrowserRouter>

  )
}

export default App;
