import React from 'react';
class Logout extends React.Component {
	constructor() {
		super()
		this.handleLogout = this.handleLogout.bind(this)
	}

	handleLogout() {
		console.log('logged out')
		this.props.handleLogout()
	}

	render() {
		return (
			<button type="button" className="btn btn-success" onClick={this.handleLogout}>Logout</button>
		)
	}
}
export default Logout