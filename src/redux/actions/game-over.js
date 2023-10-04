import { GAME_OVER } from '../types'

export const gameOver = (payload) => {
	return {
		type: GAME_OVER,
		payload,
	}
}
