import { store } from '../../store'
import { PLAYERS } from '../../constants'
import { gameOver } from '../../redux/actions'

export const checkWinner = (player, scoring, numberMoves) => {
	const winningCombinations = [
		['1', '2', '3'],
		['4', '5', '6'],
		['7', '8', '9'],
		['1', '4', '7'],
		['2', '5', '8'],
		['3', '6', '9'],
		['1', '5', '9'],
		['3', '5', '7'],
	]
	if (numberMoves === 9) {
		store.dispatch(gameOver({ winner: ['Ничья', `${PLAYERS.cross} ${PLAYERS.zero}`] }))
		return
	}
	winningCombinations.forEach((arr) => {
		const [a, b, c] = arr
		if (scoring[a] === player && scoring[b] === player && scoring[c] === player) {
			store.dispatch(gameOver({ winner: ['Победитель', player] }))
		}
	})
}
