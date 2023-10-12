import { useEffect, useState } from 'react'

import { CellLayout } from './cell-layout'
import PropTypes from 'prop-types'
import { store } from '../../store'
import { PLAYERS } from '../../constants'
import { makeMove } from '../../redux/actions'
import { useSelector } from 'react-redux'
import { selectNextPlayer } from '../../redux/selectors'

export const CellContainer = ({ id, isReset }) => {
	const [currentPlayer, setCurrentPlayer] = useState(null)
	const nextPlayer = useSelector(selectNextPlayer)

	useEffect(() => {
		setCurrentPlayer(null)
	}, [isReset])
	const handlerOnClick = () => {
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
