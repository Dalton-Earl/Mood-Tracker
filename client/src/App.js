import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Moods from "./pages/Moods";
import Login from "./pages/Login";
import Today from "./pages/Today";
import Calendar from "./pages/Calendar";



function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/moods"]}>
          <Moods />
        </Route>
        <Route exact path={["/login"]}>
          <Login />
        </Route>
        <Route exact path={["/today"]}>
          <Today />
        </Route>
        <Route exact path={["/calendar"]}>
          <Calendar />
        </Route>
      </Switch>

    </div>
  </Router>
  );
}

export default App;
