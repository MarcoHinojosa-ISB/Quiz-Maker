import React from 'react';
import GuestRoute from './HOCs/GuestRoute.jsx';
import Header from './partials/Header/Header.jsx';
import Home from './views/Home/Home.jsx';
import LoginPage from './views/LoginPage/LoginPage.jsx';
import PageNotFound from './views/PageNotFound/PageNotFound.jsx';
import Preview from './views/Preview/Preview.jsx';
import QuizCreation from './views/QuizCreation/QuizCreation.jsx';
import QuizInProgress from './views/QuizInProgress/QuizInProgress.jsx';
import Quizzes from './views/Quizzes/Quizzes.jsx';
import SignupPage from './views/SignupPage/SignupPage.jsx';
import Submission from './views/Submission/Submission.jsx';
import Submissions from './views/Submissions/Submissions.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route render={(props) => <Header {...props}/>} />

          <Switch>
            <Route exact path="/" component={Home} />
            <GuestRoute path="/login-page" component={LoginPage} />
            <Route path="/quiz-creation" component={QuizCreation} />
            <Route path="/quizzes/preview/:id" component={Preview} />
            <Route path="/quizzes/:id" component={QuizInProgress} />
            <Route path="/quizzes" component={Quizzes} />
            <GuestRoute path="/signup-page" component={SignupPage} />
            <Route path="/submissions/:id" component={Submission} />
            <Route path="/submissions" component={Submissions} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
