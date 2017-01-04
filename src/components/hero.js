// This component shows a single battler in the arena.

import React from 'react'
const ptypes = React.PropTypes
import {Link} from 'react-router'
import {connect} from 'react-redux'

const Hero = React.createClass({
	propTypes: {
		params: ptypes.shape({name:ptypes.string.isRequired}).isRequired, // will be provided by react-router
		heroes: ptypes.object.isRequired // will be provided by react-redux
	},
	render(){
		let name = this.props.params.name;
		let {quote,kills} = this.props.heroes[name] || {};
		return <div>
			<p><Link to="/">Back to arena</Link></p>
			<p>Here's some info on {name}:</p>
			<p><strong>Quote:</strong> {quote} </p>
			<p><strong>Kills:</strong> {kills} </p>
		</div>;
	}
});


// connect to Redux store

	// This component will have access to `appstate.heroes` through `this.props.heroes`
const mapAppStateToProps = (state)=> ({heroes:state.heroes});

export default connect(mapAppStateToProps)(Hero);
