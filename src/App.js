import React, { Component } from 'react'
import StoryComponent from './Staff/StoryComponent'
import BranchComponent from './Staff/BranchComponent'
import ItemComponent from './Staff/ItemComponent'



export default class App extends Component {
	constructor() {
		super()

		this.state = {
			items1: [
				{ id: Date.now(), name: 'Зашёл на сайт', editable: false }
			],
			items2: [
				{ id: Date.now(), name: 'Ушёл с сайта :(', editable: false }
			]
		}
	}

	addNewItem(itemsKey) {
		this.setState({
			[itemsKey]: this.state[itemsKey].concat({
				id: Date.now(),
				name: '',
				editable: true
			})
		})
	}

	switchToEdit(itemsKey, id) {
		this.setState({
			[itemsKey]: this.state[itemsKey].map(item => {
				if (item.id === id) {
					item.editable = true
				}
				return item
			})
		})
	}

	editItem(itemsKey, text, id) {
		this.setState({
			[itemsKey]: this.state[itemsKey].map(item => {
				if (item.id === id) {
					item.name = text
					item.editable = false
				}
				return item
			})
		})
	}

	render() {
		const { items1, items2 } = this.state

		return (
			<div className="app">
				<StoryComponent name="1">
					<BranchComponent name="1" addNewItem={this.addNewItem.bind(this, 'items1')}>
						{items1 ? items1.map(item => {
							return <ItemComponent
								editItem={this.editItem.bind(this, 'items1')}
								switchToEdit={this.switchToEdit.bind(this, 'items1')}
								key={item.id}
								{...item}
							/>
						}) : null}
					</BranchComponent>

					<BranchComponent name="2" addNewItem={this.addNewItem.bind(this, 'items2')}>
						{items2 ? items2.map(item => {
							return <ItemComponent
								editItem={this.editItem.bind(this, 'items2')}
								switchToEdit={this.switchToEdit.bind(this, 'items2')}
								key={item.id}
								{...item}
							/>
						}) : null}
					</BranchComponent>
				</StoryComponent>
			</div>
		);
	}
}
