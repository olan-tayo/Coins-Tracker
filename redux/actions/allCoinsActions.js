import axios from 'axios'
import cogoToast from 'cogo-toast'
import { GET_ALL_COIN } from '../types'

// get all coins
export const getAllCoins = (val) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d',
      )
      if (res.status === 200) {
        dispatch({ type: GET_ALL_COIN, payload: res.data })
      }
    } catch (err) {
      cogoToast.error(err.message)
    }
  }
}
