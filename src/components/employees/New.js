import React from 'react'
import _ from 'lodash'
import axios from '../config/Axios'
import EmployeeForm from './form';
import FormError from '../common/FormError';
class EmployeeNew extends React.Component {
	constructor() {
		super()
		this.state = {
			errors: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(formData) {
		axios.post('/employees', formData, {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then(response => {
				console.log(response.data)
				if (response.data.errors) {
					const errors = response.data.errors
					this.setState({ errors })
				}
				else {
					this.props.history.push('/employees')
				}
			})
	}

	render() {
		return (
			<div>
				<br />
				<EmployeeForm handleSubmit={this.handleSubmit} />
				{
					!_.isEmpty(this.state.errors) && <FormError errors={this.state.errors} />
				}
			</div>
		)
	}
}

export default EmployeeNew