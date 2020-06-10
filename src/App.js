import React from 'react';
import "./App.css"
import KoriotoLanding from "./components/pages/koriotoLanding"

import {
  Switch,
  Route,
  // Redirect
} from "react-router-dom";
import {LivePage} from "./components/pages/live"
import KoriotoNav from './components/miscComp/navKotioto';
import Footer from './components/miscComp/footer';
import {PlaceholderPage} from "./components/pages/placeholder"


function App() {
  return (
    <div className="App">

    <KoriotoNav />
      <Switch>

                <Route 
                exact path="/live"
                render={props =>
                  <LivePage
                    {...props}

                  />}
                />
                <Route 
                exact path="/hear"
                render={props =>
                  <PlaceholderPage
                    {...props}

                  />}
                />
                <Route 
                exact path="/mira"
                render={props =>
                  <PlaceholderPage
                    {...props}

                  />}
                />
                <Route 
                exact path="/muestra"
                render={props =>
                  <PlaceholderPage
                    {...props}

                  />}
                />


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
