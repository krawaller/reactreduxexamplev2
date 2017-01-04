// This component shows a single battler in the arena. It is used by the Battlers component

import React from 'react'
const ptypes = React.PropTypes
import {Link} from 'react-router'

import reduce from 'lodash/reduce'

import C from '../constants'

let Battler = React.createClass({
	propTypes: {
		name: ptypes.string.isRequired,
		kill: ptypes.func.isRequired,
		duck: ptypes.func.isRequired
	},
	render() {
		let {name,doing,duck,kill} = this.props

		// list all enemies that aren't dead yet
		let killable = reduce(
			doing,
			(list,status,opp)=> status !== C.DEAD && opp!==name ? list.concat(opp) : list,
			[]
		);

		// make buttons for all killable enemies
		const buttons = killable.map(
			(opp)=> <button key={opp} onClick={kill.bind(this,opp)}>{"Kill "+opp}</button>,
			this
		).concat(<button key="duck" onClick={duck}>duck</button>); // ...as well as a duck button

		//controls depend on what we're doing
		const controls = {
			[C.WAITING]: buttons.length > 1 ? buttons : "Winner!!",
			[C.DUCKING]: "ducking",
			[C.DEAD]: "...dead...",
			[C.AIMING]: "aiming!"
		}[doing[name]];

		return <div className="battler">
			<Link to={"/hero/"+name}>{name}</Link>
			<div>{controls}</div>
		</div>;
	}
});

export default Battler;
