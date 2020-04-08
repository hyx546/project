import React from 'react'
import ReactDom from 'react-dom'
import Test from './Test'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
// import { counter } from './index.redux'
import reducer from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard';



// const store = createStore(counter,applyMiddleware(thunk))
const store = createStore(reducer,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension(): f=>f
))

// function render() {
//   ReactDom.render(<Test store={store} addGUN={addGUN} removeGUN={removeGUN} addGunAsync={addGunAsync}/>,document.getElementById('root'))
// }
// render()

// store.subscribe(render)

// class Demo extends React.Component{
//   render() {
//     console.log(this.props);
//     this.props.history.push('/')
//     return(
//     <h2>测试组件</h2>
//     )
//   }
// }
// 登录
//   没有登录信息 统一跳转login
// 页面 导航+显示+注销
//   一营
//    二营
//   骑兵连

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* exact表明比如完全匹配       路由对应渲染模版*/}
        <Route path='/login'exact component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/dashboard'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)