import React from 'react'

class SearchBox extends React.Component {
	constructor() {
		super()
		this.state = {
			text: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
	}
	handleChange(e) {
		e.preventDefault()
		const text = e.target.value
		this.setState({ text })
		this.props.handleChange(text)
	}

	render() {
		return (
			<div className="form-group">
				<form onSubmit={this.handleSubmit}>
					<input type="text" className="form-control-lg" placeholder="search" value={this.state.text} onChange={this.handleChange} />
					<button type="submit" className="btn btn-info -sm">Search</button>
				</form>
			</div>
		)
	}
}
export default SearchBox
