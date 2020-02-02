import React from 'react';
import Home from './Components/Home';
import Jokes from './Components/Jokes';
import Joke from './Components/Joke';
import Navbar from './Components/Navbar';
import JokeAdmin from './Components/JokeAdmin';
import Opret from './Components/Opret';
import Ret from './Components/Ret';
import AllJokes from './Components/AllJokes';
import SearchResult from './Components/SearchResult';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/top10jokes" component={Jokes} />
          <Route path="/jokeadmin" component={JokeAdmin} />
          <Route path="/opret" component={Opret} />
          <Route path="/allejokes" component={AllJokes} />
          <Route path="/jokes/search/:text" component={SearchResult} />
          <Route path="/ret/:joke_id" component={Ret} />
          <Route path="/:joke_id" component={Joke} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;
