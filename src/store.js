import { createStore, combineReducers } from 'redux';
import quizCreationReducer from './components/views/QuizCreation/QuizCreation.reducer';

const mainReducer = combineReducers({
  quizCreation: quizCreationReducer
});

const store = createStore(mainReducer);

export default store;
