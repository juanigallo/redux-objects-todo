import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tasks from './components/Tasks'
import Main from './components/Main'

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/completado">
        <Tasks filter="complete" />
      </Route>
      <Route exact path="/incompleto">
        <Tasks filter="incomplete" />
      </Route>
    </Router>
  );
}

export default App;
