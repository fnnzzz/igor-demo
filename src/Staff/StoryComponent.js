import React, { Component } from 'react'
import Toggler from '../Toggler'

export default class StoryComponent extends Component {
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

        return <div className="story-block">
	        <h1>
		        <Toggler isExpand={isExpand} toggler={this.toggleVisibility.bind(this)} />
		        Story {this.props.name}
	        </h1>

	        { isExpand ? this.props.children : null }
        </div>
    }
}