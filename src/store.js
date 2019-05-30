import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import previewReducer from './components/views/Preview/Preview.reducer';
import quizCreationReducer from './components/views/QuizCreation/QuizCreation.reducer';
import quizInProgressReducer from './components/views/QuizInProgress/QuizInProgress.reducer';
import quizzesReducer from './components/views/Quizzes/Quizzes.reducer';
import signupPageReducer from './components/views/SignupPage/SignupPage.reducer';

const rootReducer = combineReducers({
  preview: previewReducer,
  quizCreation: quizCreationReducer,
  quizInProgress: quizInProgressReducer,
  quizzes: quizzesReducer,
  signupPage: signupPageReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
