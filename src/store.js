import { reducer } from './redux/reducer/reducer'
import { createStore } from 'redux'

export const store = createStore(reducer)
