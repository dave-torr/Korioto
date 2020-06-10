import React from 'react';
import "./App.css"
import KoriotoLanding from "./components/pages/koriotoLanding"

import {
  Switch,
  Route,
  // Redirect
} from "react-router-dom";
import KoriotoNav from './components/miscComp/navKotioto';
import Footer from './components/miscComp/footer';

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
      <Footer />
    </div>
  );
}

export default App;
