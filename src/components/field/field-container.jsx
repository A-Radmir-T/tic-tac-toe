import { useEffect, useState } from 'react'

import { FieldLayout } from './field-layout'
import { CellContainer } from '../cell/cell-container'
import { CELLS, PLAYERS } from '../../constants'
import { checkWinner } from './field-utils'
import { store } from '../../store'
import { reset } from '../../redux/actions'
import { useSelector } from 'react-redux'
import {
	selectCurrentPlayer,
	selectNextPlayer,
	selectNumberMoves,
	selectScoring,
	selectWinner,
} from '../../redux/selectors'

export const FieldContainer = () => {
	const [isReset, setIsReset] = useState(false)

	const nextPlayer = useSelector(selectNextPlayer)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const scoring = useSelector(selectScoring)
	const numberMoves = useSelector(selectNumberMoves)
	const winner = useSelector(selectWinner)

	if (numberMoves >= 5 && !winner.length) {
		checkWinner(currentPlayer, scoring, numberMoves)
	}

	const handleReset = () => {
		store.dispatch(reset())
		setIsReset(!isReset)
	}

	return (
		<FieldLayout handleReset={handleReset} info={nextPlayer} winner={winner}>
			{CELLS.map((cell) => (
				<CellContainer key={cell} id={cell} isReset={isReset} />
			))}
		</FieldLayout>
	)
}
