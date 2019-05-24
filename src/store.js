import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import previewReducer from './components/views/Preview/Preview.reducer';
import quizCreationReducer from './components/views/QuizCreation/QuizCreation.reducer';
import quizInProgressReducer from './components/views/QuizInProgress/QuizInProgress.reducer';
import quizzesReducer from './components/views/Quizzes/Quizzes.reducer';

const rootReducer = combineReducers({
  preview: previewReducer,
  quizCreation: quizCreationReducer,
  quizInProgress: quizInProgressReducer,
  quizzes: quizzesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
