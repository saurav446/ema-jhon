import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetails from './components/Product/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './components/Login/UserAuth';
import ShipMent from './components/ShipMent/ShipMent';


function App() {
  return (
    <div>
      <AuthContextProvider>
      <Header></Header>
      <Router>
        <Switch> 
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:Pkey">
            <ProductDetails></ProductDetails>
          </Route> 
          <Route path="/Login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <ShipMent></ShipMent>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </AuthContextProvider>
    </div>
  );
}

export default App;
