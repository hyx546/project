// import React from 'react';    next已经包含了
import {Button } from 'antd'

import Router from 'next/router'

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
    
  }
}
events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

export default () => {

  return (
    <>
      <span>index</span>
      <a >Index A</a>
    </>
  )
}
