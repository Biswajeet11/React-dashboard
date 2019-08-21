import React from 'react'
import axios from '../config/Axios';
class TicketForm extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			dept: '', //select
			priorities: ['High', 'Medium', 'Low'], //select
			priority: '',
			msg: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleReset = this.handleReset.bind(this)
		this.submitHandle = this.submitHandle.bind(this)
	}

	componentDidMount() {
		axios.get('/', {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then(response =>
				console.log(response.data))
			.catch(err => console.log(err))
	}

	submitHandle(e) {
		e.preventDefault()
		const formData = {
			name: this.state.name,
			dept: this.state.dept,
			priority: this.state.priority,
			msg: this.state.msg
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleReset(e) {
		this.setState({
			[e.target.name]: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitHandle}>
					<label>Name</label>
					<input type="text" name="name" placeholder="Enter name" onChange={this.handleChange} />

					<label>Priority</label>
					<select value={this.state.priority} onChange={this.handleChange} name="priority">
						<option value=" ">select priority</option>
						{this.state.priorities.map((prioritie, index) => {
							return <option key={index} >{prioritie}</option>
						})}
					</select>

					<label>Message</label>
					<input type="text" name="msg" placeholder="Type message" onChange={this.handleChange} />
					<label>Name</label>
					<input type="text" name="name" placeholder="Enter name" onChange={this.handleChange} />
					<button type="submit">Submit</button>
					<button type="reset">Reset</button>
				</form>
			</div>
		)
	}
}

export default TicketForm