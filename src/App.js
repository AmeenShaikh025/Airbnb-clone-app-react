import React from 'react';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";

import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/search">
          <Header />
          <SearchPage />
          <Footer />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
