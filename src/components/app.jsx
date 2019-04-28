import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './partials/Header/Header.jsx';
import Home from './views/Home/Home.jsx';
import QuizCreation from './views/QuizCreation/QuizCreation.jsx';
import PageNotFound from './views/PageNotFound/PageNotFound.jsx';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route render={(props) => <Header {...props}/>} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quiz-creation" component={QuizCreation} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
