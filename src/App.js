import React from 'react';
import './App.css';
// Pages:
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetails';
// Router DOM:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components:
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Alert></Alert>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/cart'>
          <Cart></Cart>
        </Route>
        <PrivateRoute path='/checkout'>
          <Checkout></Checkout>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/products' exact>
          <Products></Products>
        </Route>
        <Route
          path='/products/:id'
          children={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
