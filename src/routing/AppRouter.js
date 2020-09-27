import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomeScreen } from "../pages/Home/HomeScreen";
import { ProductsScreen } from "../pages/Products/ProductScreen";
import { NavBar } from "../components/NavBar/NavBar";

export const AppRouter = () => {
  return (
    <Router>

      <div>

        <NavBar />

        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={HomeScreen} />
            <Route exact={true} path="/products" component={ProductsScreen} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>

      </div>

    </Router>

  );
};
