import React from 'react'
const ptypes = React.PropTypes

import actionCreators from '../actions'
import {connect} from 'react-redux'

import Log from './log'
import Battlers from './battlers'

const Home = React.createClass({
	propTypes: {
		// redux store state, imported below
		battle: ptypes.shape({ 
			doing: ptypes.object.isRequired,
			log: ptypes.arrayOf(ptypes.string)
		}).isRequired,
		// redux action hookups, set up below
		kill: ptypes.func.isRequired,
		duck: ptypes.func.isRequired,
		reset: ptypes.func.isRequired
	},
	render(){
		let battleprops = this.props.battle;
		return (
			<div>
				<Battlers doing={battleprops.doing} kill={this.props.kill} duck={this.props.duck} />
				<Log log={battleprops.log}/>
				{ battleprops.standing === 1 && <button onClick={this.props.reset}>Reset</button> }
			</div>
		);
	}
});

// now we connect the component to the Redux store:

	// This component will have access to `state.battlefield` through `this.props.battle`
const mapAppStateToProps = (state)=> ({battle:state.battlefield});

const mapDispatchToProps = (dispatch)=> ({
	kill: (killer,victim)=> dispatch(actionCreators.aimAt(killer,victim)),
	duck: (coward)=> dispatch(actionCreators.duckDown(coward)),
	reset: ()=> dispatch(actionCreators.reset())
});

export default connect(mapAppStateToProps,mapDispatchToProps)(Home);
