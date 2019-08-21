import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import CustomerList from './components/customer/List';
import DepartmentList from './components/department/List';
import CustomerNew from './components/customer/New';
import EmployeesList from './components/employees/List';
import EmployeeNew from './components/employees/New';
import EmployeeShow from './components/employees/EmployeeShow';
import './App.css'
import RegisterForm from './components/auth/Register-form';
import LoginForm from './components/auth/Login-form';

function App() {
	return (
		<BrowserRouter>
			<div>
				<header>
					<nav className="navbar">
						<h1> Dashboard </h1>

						<section className="main-nav">
							<ul className="nav-items">
								{/* <li className="nav-item">	<NavLink to='/home' > Home </NavLink></li> */}
								<li className="nav-item">	<NavLink to='/customers'> Customers </NavLink></li>
								<li className="nav-item">	<NavLink to='/departments'> Departments </NavLink></li>
								<li className="nav-item">	<NavLink to='/employees'> Employees </NavLink></li>
							</ul>
						</section>
					</nav>
				</header>
				<Route path='/' exact={true} component={RegisterForm}/>
				<Route path='/' exact={true} component={LoginForm}/>
				<Route path='/customers' exact={true} component={CustomerList} />
				<Route path='/departments' component={DepartmentList} />
				<Route path='/customers/new' component={CustomerNew} />
				<Route path='/employee/new' component={EmployeeNew} />
				<Route path='/employees' exact={true} component={EmployeesList} />
				<Route path='/employees/:id' component={EmployeeShow} />
			</div>
		</BrowserRouter>
	);
}

export default App;
