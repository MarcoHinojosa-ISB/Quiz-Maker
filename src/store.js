import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quizCreationReducer from './components/views/QuizCreation/QuizCreation.reducer';

const rootReducer = combineReducers({
  quizCreation: quizCreationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
