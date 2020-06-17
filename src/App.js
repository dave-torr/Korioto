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
import {Footer} from './components/miscComp/footer';
import {PlaceholderPage} from "./components/pages/placeholder"
import {HearPage} from "./components/pages/hear"

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
                exact path="/escucha"
                render={props =>
                  <HearPage
                    {...props}

                  />}
                />
                <Route 
                exact path="/qhaway"
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

      <SocialComponent1 />
      <Footer />
    </div>
  );
}

export default App;
