import React from 'react'
class EditTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			customerId: props.customerId,
			name: props.name,
			email: props.email,
			mobile: props.mobile,
			isEdit: false,

		}
		this.handleChange = this.handleChange.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
		this.handleSave = this.handleSave.bind(this)
	}
	handleEdit() {
		if (this.state.isEdit) {
			this.setState({ isEdit: false })
		}
		else {
			this.setState({ isEdit: true })
		}

	}

	handleSave() {
		const tableData = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile,
			customerId: this.state.customerId,
		}
		this.setState({ isEdit: false })
		this.props.handleSave(tableData)
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	// handleCheckbox(e) {

	// }

	render() {
		console.log(this.props)
		return (
			<tr>
				<td>{this.props.index + 1}</td>

				<td>{this.state.isEdit ?
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
					: <span>{this.props.name}</span>}</td>

				<td>{this.state.isEdit ?
					<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
					: <span>{this.props.email}</span>}</td>

				<td>{this.state.isEdit ?
					<input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
					: <span>{this.props.mobile}</span>}</td>

				<td><button onClick={this.handleEdit}>Edit</button></td>
				<td><button onClick={this.handleSave}>Save</button></td>

				<td><input type="checkbox" name="checkbox" onChange={this.handleChange} /></td>

			</tr>
		)
	}
}
export default EditTable