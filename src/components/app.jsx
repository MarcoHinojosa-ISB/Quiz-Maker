import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './partials/Header/Header.jsx';
import Home from './views/Home/Home.jsx';
import PageNotFound from './views/PageNotFound/PageNotFound.jsx';
import Preview from './views/Preview/Preview.jsx';
import QuizCreation from './views/QuizCreation/QuizCreation.jsx';
import QuizInProgress from './views/QuizInProgress/QuizInProgress.jsx';
import Quizzes from './views/Quizzes/Quizzes.jsx';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route render={(props) => <Header {...props}/>} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/preview/:id" component={Preview} />
            <Route path="/quiz-creation" component={QuizCreation} />
            <Route path="/quiz-in-progress/:id" component={QuizInProgress} />
            <Route path="/quizzes" component={Quizzes} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
