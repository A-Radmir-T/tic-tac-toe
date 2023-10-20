import PropTypes from 'prop-types'

import { Component } from 'react'

export class CellLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<li
				className="m-0 p-0 border flex items-center justify-center cursor-pointer font-medium text-5xl border-black"
				onClick={() => this.props.handlerOnClick(this.props.id)}
			>
				<p className="m-0">{this.props.children}</p>
			</li>
		)
	}
}

CellLayout.propTypes = {
	handlerOnClick: PropTypes.func,
	id: PropTypes.string,
}
