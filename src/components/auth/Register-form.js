import React from 'react'
import _ from 'lodash'
import axios from '../config/Axios';
import FormError from '../common/FormError';
class RegisterForm extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			username: '',
			password: '',
			errors: {},
			sucess: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit(e) {
		e.preventDefault()
		const registerData = {
			email: this.state.email,
			username: this.state.username,
			password: this.state.password
		}
		axios.post('/users/register', registerData)
			.then((response) => {
				console.log(response.data)
				if (response.data.errors) {
					const errors = response.data.errors
					this.setState({ errors })
				}
				else {
					const sucess = 'Registered successfully'
					this.setState({sucess})
				}
			})
			.catch(err=>console.log(err))
	}
	render() {
		return (
			<div className="form-group container">
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">UserName</label>
					<br />
					<input type="text" value={this.state.username} className="form-control-sm" onChange={this.handleChange} name="username" id="username" />
					<br />
					<label htmlFor="email">Email</label>
					<br />
					<input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email" />
					<br />
					<label htmlFor="password">Password</label>
					<br />
					<input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="password" />
					<br />
					<button type="submit" className="btn btn-info">Register</button>
					{
					!_.isEmpty(this.state.errors) && <FormError errors={this.state.errors} />
					}
					{this.state.sucess &&	<h2>User Registered</h2>}
				</form>
			</div>
		)
	}
}
export default RegisterForm