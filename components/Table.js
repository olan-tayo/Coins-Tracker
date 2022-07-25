import React from 'react'
import styles from '../styles/Table.module.scss'
import moment from 'moment'

const Table = ({ data }) => {
  return (
    <div>
      <div className={styles.main_table_container}>
        <div>
          <li>Rank</li>
        </div>
        <div>
          <li>Name</li>
        </div>
        <div>
          <li>Current Price</li>
        </div>

        <div>
          <li>Time Updated</li>
        </div>

        <div>
          <li>Market Cap</li>
        </div>

        <div>
          <li>Change(24hrs)</li>
        </div>

        <div>
          <li>% Change(24hrs)</li>
        </div>
      </div>

      <div>
        {data.map((coins, index) => {
          return (
            <div className={styles.table_row} key={index}>
              <div>
                <li>{coins.market_cap_rank}</li>
              </div>
              <div className={styles.table_img_div}>
                <img
                  src={coins.image}
                  alt="Token Icon"
                  width={'20px'}
                  height={'20px'}
                />

                <li>{coins.name}</li>
              </div>
              <div>
                <li>${coins.current_price.toLocaleString()}</li>
              </div>

              <div>
                <li>{moment(coins.last_updated).format('LLL')}</li>
              </div>

              <div>
                <li>${coins.market_cap}</li>
              </div>

              <div>
                <li>{coins.price_change_24h.toFixed(2)}</li>
              </div>

              <div>
                <li>{coins.price_change_percentage_24h}</li>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Table
