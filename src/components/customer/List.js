import React from 'react'
import axios from '../config/Axios'
import { Link } from 'react-router-dom'
import SearchBox from '../common/Search-box';
import Loader from '../common/Loader';

import EditTable from './EditTable';
import ProgressBar from './Progress-bar';
import './table.css'
import '../../App.css'
import LineChart from '../charts/Line-chart';


class CustomerList extends React.Component {
	constructor() {
		super()
		this.state = {
			customers: [],
			isLoading: true,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSave = this.handleSave.bind(this)
	}

	componentDidMount() {
		axios.get('/customers', {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then(response => {
				console.log(response.data)
				const customers = response.data
				this.setState({ customers, isLoading: false })
				return customers
			})
			.catch(err => console.log(err))
	}

	handleSave(tableData) {
		const customerId = tableData.customerId
		axios.put(`/customers/${customerId}`, {
			headers: {
				'x-auth': localStorage.getItem('token')
			}
		})
			.then((response) => {
				console.log(response.data)
			})
			.catch(err => console.log(err))
	}


	handleChange(text) {
		console.log(this.state.customers)
		const customerDatas = this.state.customers
		const customers = customerDatas.filter((customerData => {
			return customerData.name.toLowerCase().includes(text)
		}))

		if (this.state.customers.length) {
			this.setState({ customers })
		}
		else {
			console.log(`${customers}......`)
			this.componentDidMount()
		}
	}

	render() {

		console.log('customer localStorage', localStorage)
		return (
			<div>

				<br />
				<SearchBox handleChange={this.handleChange} />
				<br />
				{this.state.isLoading ? (
					<Loader />
				) : (
						<div>
							<h3>Progress Bar</h3>
							<ProgressBar percent={40} />
							<br />
							<table >
								<thead >
									<tr>
										<th scope="col">Sl.No.</th>
										<th scope="col">Name</th>
										<th scope="col">Email</th>
										<th scope="col">Mobile</th>
									</tr>
								</thead>
								<tbody>
									{this.state.customers.map((customer, index) => {
										return (
											<EditTable key={customer._id} customerId={customer._id} index={index} name={customer.name} email={customer.email} mobile={customer.mobile} handleSave={this.handleSave} />
										)
									})}
								</tbody>
							</table>
						</div>
					)}
				<br />

				<Link to="/customers/new"><button className="btn-sm btn-danger">Add Customer</button></Link>
				<br />

				<LineChart />
			</div>
		)
	}
}
export default CustomerList