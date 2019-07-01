import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import loginPageReducer from './components/views/LoginPage/LoginPage.reducer';
import previewReducer from './components/views/Preview/Preview.reducer';
import quizCreationReducer from './components/views/QuizCreation/QuizCreation.reducer';
import quizInProgressReducer from './components/views/QuizInProgress/QuizInProgress.reducer';
import quizzesReducer from './components/views/Quizzes/Quizzes.reducer';
import signupPageReducer from './components/views/SignupPage/SignupPage.reducer';
import submissionReducer from './components/views/Submission/Submission.reducer';
import submissionsReducer from './components/views/Submissions/Submissions.reducer';

const rootReducer = combineReducers({
  loginPage: loginPageReducer,
  preview: previewReducer,
  quizCreation: quizCreationReducer,
  quizInProgress: quizInProgressReducer,
  quizzes: quizzesReducer,
  signupPage: signupPageReducer,
  submission: submissionReducer,
  submissions: submissionsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
