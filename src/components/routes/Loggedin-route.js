import React from 'react';
import { BrowserRouter, NavLink, Route, } from 'react-router-dom';
import CustomerList from '../customer/List';
import DepartmentList from '../department/List';
import CustomerNew from '../customer/New';
import EmployeeNew from '../employees/New';
import EmployeesList from '../employees/List';
import EmployeeShow from '../employees/EmployeeShow';
import RegisterForm from '../auth/Register-form';
import Logout from '../auth/Logout';
import '../../App.css';

class LoggedInRoutes extends React.Component {
	constructor() {
		super()
		this.handleLogout = this.handleLogout.bind(this)
	}

	handleLogout() {
		console.log(`logged out`)
		console.log(localStorage.getItem('token'))
		localStorage.removeItem('token')
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<header>
						<nav className="navbar">
							<h1><NavLink to='/'>Dashboard </NavLink></h1>
							<section className="main-nav">
								<ul className="nav-items">
									<li className="nav-item">	<NavLink to='/customers'> Customers </NavLink></li>
									<li className="nav-item">	<NavLink to='/departments'> Departments </NavLink></li>
									<li className="nav-item">	<NavLink to='/employees'> Employees </NavLink></li>
									<Logout handleLogout={this.handleLogout} />
								</ul>
							</section>
						</nav>
					</header>

					<Route path='/customers' exact={true} component={CustomerList} />
					<Route path='/departments' component={DepartmentList} />
					<Route path='/customers/new' component={CustomerNew} />
					<Route path='/employee/new' component={EmployeeNew} />
					<Route path='/employees' exact={true} component={EmployeesList} />
					<Route path='/employees/:id' component={EmployeeShow} />
					<Route path='/register' component={RegisterForm} />
					<Route path='/logout' />
					<Route path='/' exact={true} />
				</div>
			</BrowserRouter>
		)
	}
}
export default LoggedInRoutes