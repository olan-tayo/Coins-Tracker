import React, { useEffect } from 'react'
import styles from '../styles/Coins.module.scss'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { getBtcCoin } from '../redux/actions/btcCoinActions'
import { getAllCoins } from '../redux/actions/allCoinsActions'
import CountUp from 'react-countup'

const Coins = ({ fetchCoin, coin, fetchAllCoins, coins }) => {
  useEffect(() => {
    fetchCoin()
    fetchAllCoins()

    const intervalData = setInterval(() => {
      fetchCoin()
      fetchAllCoins()
    }, 10000)

    return () => clearInterval(intervalData)
  }, [])

  return (
    <div className={styles.main_div}>
      <div className={styles.header_div}>
        <div>
          <p className={styles.chart_name}>Chart Name</p>
          <p className={styles.coin_name}>{coin.btcCoin.chartName}</p>
        </div>

        <div>
          <p className={styles.bpi_name}>USD</p>
          <p className={styles.bpi_price}>
            Price:
            <span> {coin.btcCoin.bpi ? coin.btcCoin.bpi.USD.rate : null}</span>
          </p>
        </div>

        <div>
          <p className={styles.bpi_name}>EUR</p>
          <p className={styles.bpi_price}>
            Price:
            <span> {coin.btcCoin.bpi ? coin.btcCoin.bpi.EUR.rate : null}</span>
          </p>
        </div>

        <div>
          <p className={styles.bpi_name}>GBP</p>
          <p className={styles.bpi_price}>
            Price:
            <span> {coin.btcCoin.bpi ? coin.btcCoin.bpi.GBP.rate : null}</span>
          </p>
        </div>
      </div>

      <div className={styles.table_main_div}>
        <div className={styles.table_div}>
          <Table data={coins.allCoins} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    coin: state.btcCoin,
    coins: state.allCoins,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoin: () => dispatch(getBtcCoin()),
    fetchAllCoins: () => dispatch(getAllCoins()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coins)
