import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './partials/header/index.jsx';
import { Home } from './views/home/index.jsx';
import { PageNotFound } from './views/page-not-found/index.jsx';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route render={(props) => <Header {...props}/>} />

          <Switch>
            <Route exact path="/" render={(props) => <Home {...props}/>} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App };
