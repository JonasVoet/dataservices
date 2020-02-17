import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Header/Navigation';
import AllQuotes from './components/AllQuotes/AllQuotes';
import QuoteAdmin from './components/CRUD/QuoteAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <BrowserRouter>

      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/allquotes" component={AllQuotes} />
          <Route path="/" component={QuoteAdmin} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;

