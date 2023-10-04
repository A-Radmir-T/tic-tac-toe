import { MAKE_MOVE } from '../types'

export const makeMove = (payload) => {
	return {
		type: MAKE_MOVE,
		payload,
	}
}
