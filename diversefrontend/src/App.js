import React from 'react';
import Home from './Components/Home';
import Jokes from './Components/Jokes';
import Joke from './Components/Joke';
import Navbar from './Components/Navbar';
import JokeAdmin from './Components/JokeAdmin';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/jokeadmin" component={JokeAdmin} />
          <Route path="/:joke_id" component={Joke} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;
