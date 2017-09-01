import React, { Component } from 'react'

export default class ItemComponent extends Component {
	constructor() {
		super()

		this.input = null
	}

	submit(e, id) {
		e.preventDefault()

		if(!this.input) return

		const inputVal = this.input.value.trim()

		if(inputVal.length) {
			this.props.editItem(inputVal, id)
		}
	}

    render() {
    	const { id, name, editable, switchToEdit } = this.props

        return <div className="item-wrap">
	        { !editable
		        ? <span onDoubleClick={() => switchToEdit(id)}>{name}</span>
		        : <form action="#" onSubmit={(e) => this.submit(e, id)}>
		        <input type="text" ref={(i) => this.input = i} defaultValue={name} />
	        </form> }
        </div>
    }
}