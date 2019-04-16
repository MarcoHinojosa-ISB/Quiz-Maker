import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './header/index.jsx';
import { Home } from './home/index.jsx';

class PageNotFound extends React.Component {
  render(){
    return (
      <div id="page-not-found">
        <h1>404: Page not found</h1>
      </div>
    );
  }
}

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
