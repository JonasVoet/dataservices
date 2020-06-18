import React, {useEffect, useState} from 'react';
import { HashRouter, Route, Switch, useHistory, Redirect } from 'react-router-dom';
import axios from "axios";

// JS IMPORTS
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Riddles from './components/allRiddles/Riddles';
import Admin from './components/CRUD/Admin';
import Add from './components/CRUD/Add';
import Edit from './components/CRUD/Edit';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorSite from './components/ErrorSite/Error';



// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Fanger alle fejl fra backend (4xx-5xx eller ikke 2xx) og viser en alert, eller måske bootstrap popup i fremtiden
// axios.interceptors.response.use(response => {
//   return response; //Hvis der ikke er fejl, returner vi bare det normale response
// }, error => {
//   alert(error.response.data.message);
//   return Promise.reject(error);
// });


 const App = () => {
   
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/riddles' component={Riddles} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
           <Route path='/errorsite' component={ErrorSite} /> 
    
          <LoggedinCheck>
            <Route path={['/admin/:userName', '/admin']} component={Admin} />
            <Route path='/Edit/:riddle_id' component={Edit} />
            <Route path='/add' component={Add} />
          </LoggedinCheck>

       
          
        </Switch>      
      </div>
    </HashRouter>
  )
}

//Children er components der er wrapped rundt om LogginCheck, altså i mellem <LoggedinCheck>...</LoggedinCheck>
const LoggedinCheck = ({children}) => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
      axios.get("https://riddles-backend.herokuapp.com/auth/loggedin", {withCredentials: true})
      .then(response => {
        if(!response.data.message){
          setTimeout(() => {
            history.push('/'); // Redirect
            setLoading(false);
          }, 5000);
        } else {
          setLoading(false);
        
        }        
      });
  });
  return (
    <div>
      {loading ? <ErrorSite /> : children} 
    </div>
  )
}

export default App;