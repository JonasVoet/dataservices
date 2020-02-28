import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// IMPORT JS
import AllProducts from './components/Allproducts/AllProducts';
import Product from './components/Product/Product';
import ProductAdmin from './components/CRUD/Admin';
import Category from './components/Categories/Categories';
import Add from './components/CRUD/Add';
import AddCategory from './components/CRUD/AddCategory';
import Edit from './components/CRUD/Edit';
import SearchResult from './components/SearchResult/SearchResult';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'




// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact/Contact';
import Recipes from './components/Recipes/Recipes';

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
          <Route path="/recipes" component={Recipes} />
          <Route path="/contact" component={Contact} />
          <Route path="/allproducts" component={AllProducts} />

          <Route path="/Edit/:product_id" component={Edit} />

          <Route path="/category/:category_id" component={Category} />

          <Route path="/admin" component={ProductAdmin} />



        </Switch>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
