import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/admin/login" component={AdminLogin} />
        </Routes>
      </Router>
  );
}

export default App;