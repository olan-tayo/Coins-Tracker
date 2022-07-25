import React from 'react'
import Head from 'next/head'

const NextHead = ({ title, content, link }) => {
  return (
    <div>
      {' '}
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href={link} />
      </Head>
    </div>
  )
}

export default NextHead
