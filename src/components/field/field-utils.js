export const checkWinner = (player, scoring, setWinner, setGameInfo) => {
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
	winningCombinations.forEach((arr) => {
		const [a, b, c] = arr
		if (scoring[a] === player && scoring[b] === player && scoring[c] === player) {
			setWinner(['Победитель', player])
			setGameInfo('Игра окончена')
		}
	})
}
