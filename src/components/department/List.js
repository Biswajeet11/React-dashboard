import React from 'react'
import _ from 'lodash'

import axios from '../config/Axios'
import DepartmentForm from './Form'
import FormError from '../common/FormError';
import SearchBox from '../common/Search-box';
import './department.css'

class DepartmentList extends React.Component {
	constructor() {
		super()
		this.state = {
			departments: [],
			errors: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
	}

	componentDidMount() {
		axios.get('/departments', {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then(response => {
				console.log(response.data)
				const departments = response.data
				this.setState({ departments })

			})
			.catch(err => console.log(err))
	}

	handleChange(text) {
		console.log(this.state.departments)
		const departmentDatas = this.state.departments
		const departments = departmentDatas.filter((departmentData => {
			return departmentData.name.toLowerCase().includes(text)
		}))
		if (departments.length) {
			this.setState({ departments })
		}
		else {
			console.log(`${departments}......`)
			this.componentDidMount()
		}
	}

	handleRemove(id) {
		const handleElement = window.confirm('Are you sure?')
		if (handleElement) {
			axios.delete(`/departments/${id}`, {
				headers: {
					'x-auth': localStorage.getItem('token')
				}
			})
				.then(() => {
					this.setState(prevState => ({
						departments: prevState.departments.filter(department =>
							department._id !== id)
					}))
				})
		}
	}

	handleSubmit(formData) {
		console.log('list formdata', formData)
		axios.post('/departments', formData, {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then(response => {
				if (response.data.errors) {
					const errors = response.data.errors
					this.setState({
						errors
					})
				}
				else {
					const department = response.data
					this.setState(prevState => ({
						departments: [...prevState.departments, department]
					}))
				}
			})
	}
	render() {
		return (
			<div>
				<h1>The list of departments {this.state.departments.length}</h1>
				<DepartmentForm handleSubmit={this.handleSubmit} />
				<br />
				<SearchBox handleChange={this.handleChange} />
				{
					!_.isEmpty(this.state.errors) && <FormError errors={this.state.errors} />
				}
				<ul>
					{this.state.departments.map((department) => {
						return (
							<li key={department._id}>{department.name}
								<button className="btn -sm btn-danger" onClick={() => {
									this.handleRemove(department._id)
								}}>Remove</button>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
export default DepartmentList