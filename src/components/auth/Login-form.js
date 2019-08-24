import React from 'react';
import _ from 'lodash';
import axios from '../config/Axios';

class LoginForm extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			error: '',
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
			password: this.state.password,
		}

		axios.post('/users/login', loginData, {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then((response) => {
				console.log(response.data)
				if (response.data.error) {
					const error = response.data.error
					this.setState({ error })
				}
				else {
					const token = response.data.token
					localStorage.setItem('token', token);
					console.log(this.props.history)
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
					<label htmlFor="email-login">Email</label>
					<br />
					<input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email-login" />
					<br />
					<label htmlFor="password-login">Password</label>
					<br />
					<input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="password-login" />
					<br />
					<button type="submit" className="btn btn-info">Login</button>
					{
						!_.isEmpty(this.state.error) && <h3>{this.state.error}</h3>
					}
				</form>
			</div>
		)
	}
}
export default LoginForm