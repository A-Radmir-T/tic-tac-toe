import { PLAYERS } from '../../constants'
import { MAKE_MOVE, RESET, GAME_OVER } from '../types'

export const initialState = {
	nextPlayer: PLAYERS.cross,
	currentPlayer: '',
	scoring: {},
	numberMoves: 0,
	winner: [],
}

export const reducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case RESET:
			return initialState

		case MAKE_MOVE:
			return {
				...state,
				scoring: { ...state.scoring, ...payload.scoring },
				nextPlayer: payload.player,
				currentPlayer: state.nextPlayer,
				numberMoves: state.numberMoves + 1,
			}

		case GAME_OVER:
			return {
				...state,
				winner: payload.winner,
			}

		default:
			return state
	}
}
