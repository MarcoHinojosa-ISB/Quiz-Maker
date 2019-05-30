import React from 'react';
import Header from './partials/Header/Header.jsx';
import Home from './views/Home/Home.jsx';
import LoginPage from './views/LoginPage/LoginPage.jsx';
import PageNotFound from './views/PageNotFound/PageNotFound.jsx';
import Preview from './views/Preview/Preview.jsx';
import QuizCreation from './views/QuizCreation/QuizCreation.jsx';
import QuizInProgress from './views/QuizInProgress/QuizInProgress.jsx';
import Quizzes from './views/Quizzes/Quizzes.jsx';
import SignupPage from './views/SignupPage/SignupPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route render={(props) => <Header {...props}/>} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/quiz-creation" component={QuizCreation} />
            <Route path="/quizzes/preview/:id" component={Preview} />
            <Route path="/quizzes/quiz-in-progress/:id" component={QuizInProgress} />
            <Route path="/quizzes" component={Quizzes} />
            <Route path="/signup-page" component={SignupPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
