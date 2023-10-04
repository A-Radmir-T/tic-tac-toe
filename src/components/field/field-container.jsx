import { useEffect, useState } from 'react'

import { FieldLayout } from './field-layout'
import { CellContainer } from '../cell/cell-container'
import { CELLS, PLAYERS } from '../../constants'
import { checkWinner } from './field-utils'
import { store } from '../../store'
import { reset } from '../../redux/actions'

export const FieldContainer = () => {
	const [gameInfo, setGameInfo] = useState(`Ходит: ${PLAYERS.cross}`)
	const [isReset, setIsReset] = useState(false)
	const [stopGame, setStopGame] = useState([])

	useEffect(() => {
		const subStore = store.subscribe(
			({ nextPlayer, currentPlayer, scoring, numberMoves, winner }) => {
				if (winner) {
					setGameInfo('Игра окончена')
					setStopGame(winner)
					return
				}
				setGameInfo(`Ходит: ${nextPlayer}`)
				if (numberMoves >= 5) {
					checkWinner(currentPlayer, scoring, numberMoves)
				}
			},
		)

		return subStore.unsubscribe()
	}, [])
	const handleReset = () => {
		store.dispatch(reset())
		setIsReset(!isReset)
		setStopGame([])
		setGameInfo(`Ходит: ${PLAYERS.cross}`)
	}

	return (
		<FieldLayout handleReset={handleReset} info={gameInfo} winner={stopGame}>
			{CELLS.map((cell) => (
				<CellContainer key={cell} id={cell} isReset={isReset} />
			))}
		</FieldLayout>
	)
}
