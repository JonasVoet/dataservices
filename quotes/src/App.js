import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import Home from './components/Home/Home';

import AllQuotes from './components/AllQuotes/AllQuotes';
import Quote from './components/Quote/Quote';
import QuoteAdmin from './components/CRUD/QuoteAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Categories/Category';
import Add from './components/CRUD/Add';
import AddCategory from './components/CRUD/AddCategory';
import Edit from './components/CRUD/Edit';
import SearchResult from './components/SearchResult/SearchResult';

import './App.css'
// import Search from './components/Search/Search';
import Header from './components/Header/Header';


const App = () => {

  return (
    <BrowserRouter>

      <div className="App">
        <Header />

        <Switch>

          <Route exact path="/" component={AllQuotes} />
          <Route path="/quotes/search/:text" component={SearchResult} />
          <Route path="/quotes/:quote_id" component={Quote} />
          <Route path="/addcategory" component={AddCategory} />
          <Route path="/add" component={Add} />

          <Route path="/Edit/:quote_id" component={Edit} />

          <Route path="/category/:category_id" component={Category} />
          <Route path="/admin" component={QuoteAdmin} />

        </Switch>


      </div>
    </BrowserRouter>
  )
}

export default App;

