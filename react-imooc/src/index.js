import React from 'react'
import ReactDom from 'react-dom'
import Test from './Test'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { counter ,addGUN,removeGUN,addGunAsync} from './index.redux'

const store = createStore(counter,applyMiddleware(thunk))

function render() {
  ReactDom.render(<Test store={store} addGUN={addGUN} removeGUN={removeGUN} addGunAsync={addGunAsync}/>,document.getElementById('root'))
}
render()

store.subscribe(render)