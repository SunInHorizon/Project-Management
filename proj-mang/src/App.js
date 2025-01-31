import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/admin/login" component={AdminLogin} />
        </Switch>
      </Router>
  );
}

export default App;
