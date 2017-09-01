import React, { Component } from 'react'

export default class Toggler extends Component {
	render() {
		return <span className="toggle-visible" onClick={this.props.toggler}>
			{this.props.isExpand ? "- " : "+ "}
		</span>
	}
}