import { GET_BTC_COIN } from '../types'
import axios from 'axios'
import cogoToast from 'cogo-toast'

// get bitcoin price
export const getBtcCoin = (val) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.coindesk.com/v1/bpi/currentprice.json`,
      )
      if (res.status === 200) {
        dispatch({ type: GET_BTC_COIN, payload: res.data })
      }
    } catch (err) {
      cogoToast.error(err.message)
    }
  }
}
