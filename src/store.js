import { reducer } from './redux/reducer/reducer'

const createStore = (reducer) => {
	let state
	const subscribers = []
	return {
		subscribe(fn) {
			subscribers.push(fn)
			return {
				unsubscribe() {
					subscribers.filter((listener) => listener !== fn)
				},
			}
		},
		dispatch: (action) => {
			state = reducer(state, action)
			subscribers.forEach((listener) => listener(state))
		},
		getState: () => state,
	}
}

export const store = createStore(reducer)

store.dispatch({})
