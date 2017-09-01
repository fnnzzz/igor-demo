import React, { Component } from 'react'
import Toggler from '../Toggler'

export default class BranchComponent extends Component {
	constructor() {
		super()

		this.state = {
			isExpand: true
		}
	}

	toggleVisibility() {
		this.setState({ isExpand: !this.state.isExpand })
	}

	render() {
		const { isExpand } = this.state
		const { addNewItem } = this.props

		return <div className="branch-block">
			<h3>
				<Toggler isExpand={isExpand} toggler={this.toggleVisibility.bind(this)}/>
				Branch {this.props.name}
			</h3>

			{isExpand ? <div className="items">
				{this.props.children}

				<p onClick={addNewItem} className="add-new-item">+ add new</p>
			</div> : null}
		</div>
	}
}