/*
This component renders out the list of battlers in the battlefield. It is used in the Home component.
*/

import React from 'react'
const ptypes = React.PropTypes

import map from 'lodash/map'

import Battler from './battler'

const Battlers = React.createClass({
	propTypes: {
		kill: ptypes.func.isRequired,
		duck: ptypes.func.isRequired,
		doing: ptypes.object.isRequired
	},
	render(){
		let p = this.props, boxes = map(p.doing,(doing,name)=>{ // loop through all heroes
			let kill = p.kill.bind(this,name), // prefill the kill method so that killer is always `name`
				duck = p.duck.bind(this,name); // make sure battler can only duck himself
			return <Battler key={name} name={name} doing={p.doing} kill={kill} duck={duck} />;
		},this);
		return <div className="battlers">{boxes}</div>;
	}
});

export default Battlers
