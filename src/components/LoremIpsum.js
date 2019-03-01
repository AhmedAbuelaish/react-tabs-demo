import React, { Component } from 'react'
import Paragraph from './Paragraph'

class LoremIpsum extends Component {
	constructor(props) {
		super(props)

		this.state = {
			numParagraphs: 0
		}
	}

	increment() {
		this.setState({ numParagraphs: this.state.numParagraphs + 1 })
	}

	decrement() {
		if (this.state.numParagraphs === 0) {
			return
		}
		this.setState({ numParagraphs: this.state.numParagraphs - 1 })
	}

	render() {
		return (
			<section className='content'>
				<h1 className='title'>
					Number of Lorem Ipsum paragraphs: {this.state.numParagraphs}
				</h1>
				<div className='buttons'>
					<button
						className='button is-info is-medium'
						onClick={() => this.increment()}>
						Add Paragraph
					</button>
					<button
						className='button is-info is-medium'
						onClick={() => this.decrement()}>
						Remove Paragraph
					</button>
				</div>
				{[...Array(this.state.numParagraphs)].map((item, i) => (
					<Paragraph key={i} />
				))}
			</section>
		)
	}
}

export default LoremIpsum
