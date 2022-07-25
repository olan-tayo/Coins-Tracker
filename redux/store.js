import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux'
import rootReducer from '../redux/reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
)

// const persistedState = loadFromLocalStorage()

export const store = createStore(
  rootReducer,
  // persistedState,
  enhancer,
)

export default store
