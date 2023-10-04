import { useEffect, useState } from 'react'

import { CellLayout } from './cell-layout'
import PropTypes from 'prop-types'
import { store } from '../../store'
import { PLAYERS } from '../../constants'
import { makeMove } from '../../redux/actions'

export const CellContainer = ({ id, isReset }) => {
	const [currentPlayer, setCurrentPlayer] = useState(null)

	useEffect(() => {
		setCurrentPlayer(null)
	}, [isReset])

	const handlerOnClick = () => {
		const { nextPlayer } = store.getState()
		if (!currentPlayer) {
			setCurrentPlayer(nextPlayer)
			store.dispatch(
				makeMove({
					player: nextPlayer === PLAYERS.cross ? PLAYERS.zero : PLAYERS.cross,
					scoring: { [id]: nextPlayer },
				}),
			)
		}
	}
	return (
		<CellLayout id={id} handlerOnClick={handlerOnClick}>
			{currentPlayer}
		</CellLayout>
	)
}

CellContainer.propTypes = {
	isReset: PropTypes.bool,
	id: PropTypes.string,
}
