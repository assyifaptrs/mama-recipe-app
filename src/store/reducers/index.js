import { combineReducers } from 'redux';
import userReducer from './user';
import recipeReducer from './recipe';

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
});

export default rootReducer;
