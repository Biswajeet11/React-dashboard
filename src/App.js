import React from 'react';
import LoggedInRoutes from './components/routes/Loggedin-route';
import HomeRoute from './components/routes/Home-route';

function App() {
	const getToken = localStorage.getItem('token')
	if (getToken !== null) {
		console.log(`app token............1111`)
		return (
			<LoggedInRoutes />
		)
	}
	else {
		console.log(`app token............2222`)
		return (
			<HomeRoute />
		)
	}
}

// export default App;

// class App extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			isLoggedin: false
// 		}
// 	}
// 	componentDidMount() {
// 		this.setState({ isLoggedin: true })
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{!this.state.isLoggedin && <HomeRoute />}
// 				{this.state.isLoggedin && <LoggedInRoutes />}
// 			</div>
// 		)
// 	}
// }

export default App;