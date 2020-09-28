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

        <div>
          <Switch>
            <Route exact={true} path="/comercializadoradonjaime" component={HomeScreen} />
            {/* <Route exact={true} path="/#contactenos" component={RecepeScreen} /> */}
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>

      </div>

    </Router>

  );
};
