import C from '../../constants';
import getInitialAppState from '../initialstate'
import cloneDeep from 'lodash/cloneDeep'

const initialstate = getInitialAppState()

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.battlefield data.
See `initialstate.js` for a clear view of what it looks like!
*/
const battlefieldReducer = (state,action)=> {
	let newstate = cloneDeep(state); // sloppily copying the old state here, so we never mutate it
	switch(action.type){
		case C.RESET:
			return initialstate.battlefield;
		case C.DUCK_DOWN:
			newstate.doing[action.coward] = C.DUCKING;
			newstate.log.push(action.coward+" ducks down like a coward.");
			return newstate;
		case C.STAND_UP:
			newstate.doing[action.coward] = C.WAITING;
			newstate.log.push(action.coward+" stands back up.");
			return newstate;
		case C.AIM_AT:
			newstate.doing[action.killer] = C.AIMING;
			newstate.log.push(action.killer+" takes aim at "+action.victim+"!");
			return newstate;
		case C.TWITCH_FINGER:
			newstate.log.push("The trigger finger twitches on "+action.who+"'s corpse");
			return newstate;
		case C.MISS_SHOT:
			newstate.doing[action.killer] = C.WAITING;
			newstate.log.push(action.victim+" dodges a blast from "+action.killer+"!");
			return newstate;
		case C.BLAST_CORPSE:
			newstate.doing[action.killer] = C.WAITING;
			newstate.log.push(action.killer+" blasts "+action.victim+"'s corpse.");
			return newstate;
		case C.KILL_HERO:
			if (state.doing[action.victim]===C.AIMING){
				newstate.log.push(action.killer+" killed "+action.victim+" before he got his shot off!");
			} else {
				newstate.log.push(action.killer+" killed "+action.victim+"!");
			}
			newstate.doing[action.victim] = C.DEAD;
			newstate.doing[action.killer] = C.WAITING;
			newstate.standing = newstate.standing - 1;
			if (newstate.standing === 1){
				newstate.log.push(action.killer+" WINS!!");
			}
			return newstate;
		default: return state || initialstate.battlefield;
	}
};

export default battlefieldReducer;
