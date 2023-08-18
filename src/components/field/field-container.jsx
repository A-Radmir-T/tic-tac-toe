import { useEffect, useState } from 'react'

import { FieldLayout } from './field-layout'
import { CellContainer } from '../cell/cell-container'
import { CELLS, PLAYERS } from '../../constants'
import { checkWinner } from './field-utils'

export const FieldContainer = () => {
	const { cross, zero } = PLAYERS
	const [player, setPlayer] = useState(cross)
	const [prevPlayer, setPrevPlayer] = useState(player)
	const [gameInfo, setGameInfo] = useState('')
	const [isReset, setIsReset] = useState(false)
	const [numberMoves, setNumberMoves] = useState(0)
	const [scoring, setScoring] = useState({})
	const [win, setWin] = useState([])

	const handleProgressGame = (id) => {
		setNumberMoves(numberMoves + 1)
		setScoring({ ...scoring, [id]: player })
		setPrevPlayer(player)
		setPlayer(player === zero ? cross : zero)
	}

	useEffect(() => {
		setGameInfo(`Ходит ${player}`)
		if (numberMoves === 9) {
			setGameInfo('Игра окончена')
			setWin(['Ничья', `${cross} ${zero}`])
		}
		if (numberMoves >= 5) {
			checkWinner(prevPlayer, scoring, setWin, setGameInfo)
		}
	}, [scoring])
	const handleReset = () => {
		setNumberMoves(0)
		setPlayer(PLAYERS.cross)
		setIsReset(!isReset)
		setScoring({})
		setWin([])
		setGameInfo(`Ходит ${player}`)
	}

	return (
		<FieldLayout handleReset={handleReset} info={gameInfo} win={win}>
			{CELLS.map((cell) => (
				<CellContainer
					key={cell}
					id={cell}
					handleProgressGame={handleProgressGame}
					isReset={isReset}
					nextMove={player}
				/>
			))}
		</FieldLayout>
	)
}
