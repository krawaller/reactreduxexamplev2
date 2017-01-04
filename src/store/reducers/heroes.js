import C from '../../constants';
import getInitialAppState from '../initialstate'
import cloneDeep from 'lodash/cloneDeep'

const initialstate = getInitialAppState()

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.heroes data.
See `initialstate.js` for a clear view of what it looks like!
*/

const heroReducer = (state,action)=> { 
	let newstate = cloneDeep(state); // sloppily copying the old state here, so we never mutate it
	switch(action.type){
		case C.KILL_HERO:
			newstate[action.killer].kills += 1;
			return newstate;
		default: return state || initialstate.heroes;
	}
};

export default heroReducer; 
