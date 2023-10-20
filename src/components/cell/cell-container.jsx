import { Component } from 'react'

import { CellLayout } from './cell-layout'
import PropTypes from 'prop-types'
import { store } from '../../store'
import { PLAYERS } from '../../constants'
import { makeMove } from '../../redux/actions'
import { connect } from 'react-redux'

export class CellContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentPlayer: null,
		}
	}

	render() {
		return (
			<CellLayout id={this.props.id} handlerOnClick={this.handlerOnClick}>
				{this.state.currentPlayer}
			</CellLayout>
		)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.isReset !== this.props.isReset) this.setState({ currentPlayer: null })
	}

	handlerOnClick = () => {
		if (!this.state.currentPlayer) {
			this.setState({ currentPlayer: this.props.nextPlayer })
			store.dispatch(
				makeMove({
					player: this.props.nextPlayer === PLAYERS.cross ? PLAYERS.zero : PLAYERS.cross,
					scoring: { [this.props.id]: this.props.nextPlayer },
				}),
			)
		}
	}
}

CellContainer.propTypes = {
	id: PropTypes.string,
}

const mapStateToProps = (state) => ({
	nextPlayer: state.nextPlayer,
	isReset: state.isReset,
})

export const Cell = connect(mapStateToProps)(CellContainer)
