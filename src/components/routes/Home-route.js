import React from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import LoginForm from '../auth/Login-form';
import RegisterForm from '../auth/Register-form';
import CustomerList from '../customer/List';
function HomeRoute() {
	return (
		<BrowserRouter>
			<div>

				<header>
					<nav className="navbar">
						<h1> <NavLink to='/'> Dashboard </NavLink> </h1>
						<section className="main-nav">
							<ul className="nav-items">
								<li className="nav-item">	<NavLink to='/'> Login </NavLink></li>
								<li className="nav-item">	<NavLink to='/register'> Register </NavLink></li>
							</ul>
						</section>
					</nav>
				</header>

				<Route path='/' exact={true} component={LoginForm} />
				<Route path='/register' exact={true} component={RegisterForm} />
				<Route path='/customers' exact={true} component={CustomerList} />
			</div>
		</BrowserRouter>
	)
}
export default HomeRoute