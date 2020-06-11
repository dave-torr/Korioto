import React, { useState } from 'react';
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

import sampleTourDates from "./data/concertSample.json"

import {SocialComponent1} from "./components/social/socialComponents"

function App() {

  const [tourDates, setDates] = useState(sampleTourDates);

  return (
    <div className="App">

    <KoriotoNav />
      <Switch>

                <Route 
                exact path="/live"
                render={props =>
                  <LivePage
                    {...props}
                    tourDates= {tourDates}
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
                    tourDates= {tourDates}
                    {...props}

                  />}
                />



      </Switch>
      <Footer />
      <SocialComponent1 />
    </div>
  );
}

export default App;
