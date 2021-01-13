import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components/header';
import {Fav} from './components/fav';
import {Search} from './components/search'
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/fav'>
            <Fav />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
