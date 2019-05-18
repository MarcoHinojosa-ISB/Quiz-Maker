import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quizCreationReducer from './components/views/QuizCreation/QuizCreation.reducer';
import quizzesReducer from './components/views/Quizzes/Quizzes.reducer';

const rootReducer = combineReducers({
  quizCreation: quizCreationReducer,
  quizzes: quizzesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
