// A simple component to list the event log on the main battle page. No callbacks.
// Used by Home.

import React from 'react'
const ptypes = React.PropTypes

let Log = React.createClass({
	propTypes: {
		log: ptypes.arrayOf(ptypes.string).isRequired
	},
	render(){
		let list = this.props.log.map((txt,n)=> <li key={n}>{txt}</li>);
		return <ul>{list}</ul>;
	}
});

export default Log
