import React from 'react';
import "./App.css"
import KoriotoLanding from "./components/pages/koriotoLanding"

import {
  Switch,
  Route,
  // Redirect
} from "react-router-dom";
import KoriotoNav from './components/miscComp/navKotioto';

function App() {
  return (
    <div className="App">

    <KoriotoNav />
      <Switch>

                <Route 
                exact path="/"
                render={props =>
                  <KoriotoLanding
                    {...props}

                  />}
                />



      </Switch>
    </div>
  );
}

export default App;
