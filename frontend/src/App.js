import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './global.css';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Logon} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/incidents/new" component={NewIncident} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
