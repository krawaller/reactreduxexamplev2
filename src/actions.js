/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

import C from './constants'

const actionCreators = {
	reset(){
		// A normal action creator, returns a simple object describing the action.
		return {type:C.RESET};
	},
	duckDown(who){
		// here we take advantage of Redux-thunk; instead of returning an object describing an action,
		// we return a function that takes dispatch and getState as arguments. This function can then
		// invoke dispatch, now or later using setTimeout or similar.
		return (dispatch,getState)=> {
			dispatch({type:C.DUCK_DOWN,coward:who});
			setTimeout(
				()=> dispatch({type:C.STAND_UP,coward:who}),
				2000
			);
		}
	},
	aimAt(killer,victim){
		// Another async action using the Redux-thunk syntax
		return (dispatch,getState)=> {
			dispatch({type:C.AIM_AT,killer:killer,victim:victim});
			setTimeout(
				()=> {
					const state = getState().battlefield;
					// This branching was previously done in the reducer, now instead moved to here!
					if (state.doing[killer] === C.DEAD){
						dispatch({type:C.TWITCH_FINGER, who: killer});
					} else {
						// the target is ducking
						if (state.doing[victim] === C.DUCKING) {
							dispatch({type:C.MISS_SHOT, killer, victim});
						// the target has already been killed
						} else if (state.doing[victim] === C.DEAD) {
							dispatch({type:C.BLAST_CORPSE, killer, victim});
						// we kill the target!
						} else {
							dispatch({type:C.KILL_HERO,killer,victim});
						}
					}
				},
				2000
			);
		};
	}
};

export default actionCreators;
