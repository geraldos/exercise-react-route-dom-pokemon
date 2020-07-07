import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import NotMatch from "./Pages/NotMatch/NotMatch";
import PokemonAll from "./Pages/PokemonAll/PokemonAll";

import PrivateRoute from "./Components/Helpers/PrivateRoute";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <PrivateRoute exact path="/pokemonall">
            <PokemonAll />
          </PrivateRoute>

          <PrivateRoute exact path="/pokemondetails/:name">
            <PokemonDetails />
          </PrivateRoute>

          {/* Ini kalau url tidak ditemukan */}
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
