import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './header/index.jsx';
import { Home } from './home/index.jsx';
import { PageNotFound } from './page-not-found/index.jsx';

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
