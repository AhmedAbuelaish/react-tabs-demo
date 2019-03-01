import React, { Component } from 'react'
import '../styles/App.css'
import Tabs from './Tabs'
import HelloReact from './HelloReact'
import LoremIpsum from './LoremIpsum'
import Login from './Login'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeTab: 2
		}

		// Bind the changeTab function to the current state
		// so when the function is called (even by children)
		// it affects This state. call using => function to avoid bind
		this.changeTab = this.changeTab.bind(this)
	}

	changeTab(newTab) {
		this.setState({ activeTab: newTab })
	}

	render() {
		return (
			<section className='section'>
				<div className='container'>
					<Tabs activeTab={this.state.activeTab} changeTab={this.changeTab} />
					{this.state.activeTab === 0 ? <HelloReact /> : ''}
					{this.state.activeTab === 1 ? <LoremIpsum /> : ''}
					{this.state.activeTab === 2 ? <Login /> : ''}
				</div>
			</section>
		)
	}
}

export default App
