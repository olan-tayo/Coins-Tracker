// import Image from 'next/image'
import NextHead from '../components/Head'
import Nav from '../components/Nav'
import Coins from './coins'

export default function Home() {
  return (
    <div>
      {/* HEAD */}
      <div>
        {' '}
        <NextHead
          title="Price Tracker"
          content="This app displays the current price of tokens"
        />
      </div>

      {/* NAV SECTION */}
      <div>
        <Nav />
      </div>

      <div>
        <Coins />
      </div>
    </div>
  )
}
