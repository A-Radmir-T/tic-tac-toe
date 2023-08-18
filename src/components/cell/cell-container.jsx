import { useEffect, useState } from 'react'

import { CellLayout } from './cell-layout'
import PropTypes from 'prop-types'

export const CellContainer = ({ id, handleProgressGame, isReset, nextMove }) => {
	const [player, setPlayer] = useState(null)

	useEffect(() => {
		setPlayer(null)
	}, [isReset])

	const handlerOnClick = () => {
		if (!player) {
			setPlayer(nextMove)
			handleProgressGame(id)
		}
	}
	return (
		<CellLayout id={id} handlerOnClick={handlerOnClick}>
			{player}
		</CellLayout>
	)
}

CellContainer.propTypes = {
	handleProgressGame: PropTypes.func,
	isReset: PropTypes.bool,
	id: PropTypes.string,
}
