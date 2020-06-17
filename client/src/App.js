import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Moods from "./pages/Moods"



function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/moods"]}>
          <Moods />
        </Route>
      </Switch>

    </div>
  </Router>
  );
}

export default App;
