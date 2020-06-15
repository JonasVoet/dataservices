import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// JS IMPORTS
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Riddles from './components/allRiddles/Riddles';
import Admin from './components/CRUD/Admin';
import Add from './components/CRUD/Add';
import Edit from './components/CRUD/Edit';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserPro from './components/UserProfile/UserPro';


// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


 const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />

     

      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/riddles' component={Riddles} />
      <Route path='/add' component={Add} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/Edit/:riddle_id' component={Edit} />
      
      <Route path='/admin' component={Admin} />
      <Route path='/userpro/:user_id' component={UserPro} />

      </Switch>
      
    </div>
    </BrowserRouter>
  )
}

export default App;
