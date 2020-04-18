// import React from 'react';    next已经包含了
import {Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'


export default () => {

  function gotoTestB() {
    Router.push({
      pathname: '/b',
      query: {
        id: 2
      }
    },'/b/2')
  }
  return (
    <>
      <Link href='/a?id=1' as='/a/1'>
        <Button>Index</Button>
      </Link>
      <Button onClick={gotoTestB}>test b</Button>
    </>
  )
}
