import { combineReducers } from 'redux'
import btcCoinReducer from '../reducers/btcCoinReducer'
import allCoinsReducer from '../reducers/allCoinsReducer'

export default combineReducers({
  btcCoin: btcCoinReducer,
  allCoins: allCoinsReducer,
})
