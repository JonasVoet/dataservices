import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import AllProducts from './components/AllProducts/AllProducts';
import Product from './components/Product/Product';
import ProductAdmin from './components/CRUD/ProductAdmin';
import Category from './components/Categories/Category';
import Add from './components/CRUD/Add';
import AddCategory from './components/CRUD/AddCategory';
import Edit from './components/CRUD/Edit';
import SearchResult from './components/SearchResult/SearchResult';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/products/search/:text" component={SearchResult} />
          <Route path="/products/:product_id" component={Product} />
          <Route path="/addcategory" component={AddCategory} />
          <Route path="/add" component={Add} />
          <Route path="/allproducts" component={AllProducts} />

          <Route path="/Edit/:product_id" component={Edit} />

          <Route path="/category/:category_id" component={Category} />

          <Route path="/admin" component={ProductAdmin} />

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
