import React from 'react'
import _ from 'lodash'
import axios from '../config/Axios';
class LoginForm extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
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
		const loginData = {
			email: this.state.email,
			password: this.state.password
		}
		axios.post('/users/login', loginData, {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then((response) => {
				console.log(response.data)
				if (response.data.error) {
					const errors = response.data.error
					this.setState({ errors })
				}
				else {
					const token = response.data.token
					localStorage.setItem('token', token)
					this.props.history.push('/customers')
				}
			})
			.catch(err => console.log(err))
	}
	render() {
		return (
			<div className="form-group container">
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<br />
					<label htmlFor="email">Email</label>
					<br />
					<input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email" />
					<br />
					<label htmlFor="password">Password</label>
					<br />
					<input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="password" />
					<br />
					<button type="submit" className="btn btn-info">Login</button>
					{
						!_.isEmpty(this.state.errors) && <h3>{this.state.errors}</h3>
					}
				</form>
			</div>
		)
	}
}
export default LoginForm