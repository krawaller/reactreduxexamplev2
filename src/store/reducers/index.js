import {combineReducers} from 'redux';
import heroReducer from './heroes';
import battlefieldReducer from './battlefield';

let rootReducer = combineReducers({
  heroes: heroReducer,   // this means heroReducer will operate on appState.heroes
  battlefield: battlefieldReducer // battlefieldReducer will operate on appState.battlefield,
});

export default rootReducer

