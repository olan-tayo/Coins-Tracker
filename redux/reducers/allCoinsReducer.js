import { GET_ALL_COIN } from '../types'

const initialState = {
  allCoins: [],
}

const btcCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COIN:
      return {
        ...state,
        allCoins: action.payload,
      }
    default:
      return state
  }
}

export default btcCoinReducer
