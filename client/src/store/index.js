import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { buttonReducer } from './buttonReducer'

export const store = createStore(buttonReducer, composeWithDevTools(applyMiddleware(thunk)))
