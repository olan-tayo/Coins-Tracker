import { GET_BTC_COIN } from '../types'

const initialState = {
  btcCoin: {},
  allCoins: [],
}

const btcCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BTC_COIN:
      return {
        ...state,
        btcCoin: action.payload,
      }
    default:
      return state
  }
}

export default btcCoinReducer
