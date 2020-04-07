import React from 'react'
import ReactDom from 'react-dom'
import Test from './Test'
import {createStore} from 'redux'
import { counter } from './index.redux'

const store = createStore(counter)

function render() {
  ReactDom.render(<Test store={store}/>,document.getElementById('root'))
}
render()

store.subscribe(render)