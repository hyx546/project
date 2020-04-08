import React from 'react'
import ReactDom from 'react-dom'
import Test from './Test'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { counter } from './index.redux'



// const store = createStore(counter,applyMiddleware(thunk))
const store = createStore(counter,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension(): f=>f
))

// function render() {
//   ReactDom.render(<Test store={store} addGUN={addGUN} removeGUN={removeGUN} addGunAsync={addGunAsync}/>,document.getElementById('root'))
// }
// render()

// store.subscribe(render)

ReactDom.render(
  (<Provider store={store}>
    <Test/>,
    </Provider>),
  document.getElementById('root'))