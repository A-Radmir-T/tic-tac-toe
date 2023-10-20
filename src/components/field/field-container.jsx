import { FieldLayout } from './field-layout'
import { Cell } from '../cell/cell-container'
import { CELLS } from '../../constants'
import { reset } from '../../redux/actions'
import { connect } from 'react-redux'
import { Component } from 'react'
import { checkWinner } from './field-utils'

export class FieldContainer extends Component {
	constructor(props) {
		super(props)
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.numberMoves >= 5 && !this.props.winner.length) {
			checkWinner(this.props.currentPlayer, this.props.scoring, this.props.numberMoves)
		}
	}

	handleRest() {
		this.props.dispatch(reset())
	}

	render() {
		return (
			<FieldLayout
				handleReset={this.handleRest.bind(this)}
				info={this.props.nextPlayer}
				winner={this.props.winner}
			>
				{CELLS.map((cell) => (
					<Cell key={cell} id={cell} />
				))}
			</FieldLayout>
		)
	}
}

const mapStateToProps = (state) => ({
	nextPlayer: state.nextPlayer,
	currentPlayer: state.currentPlayer,
	scoring: state.scoring,
	numberMoves: state.numberMoves,
	winner: state.winner,
})

export const Field = connect(mapStateToProps)(FieldContainer)
