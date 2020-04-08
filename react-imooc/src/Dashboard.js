import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import Test from './Test';
import { connect} from 'react-redux'
import {logout} from './Auth.redux'


function Erying() {
  return <h2>二营</h2>
}
function Qibinglian() {
  return <h2>骑兵连</h2>
}

@connect (
  state => state.auth,
  {logout}
)

class Dashboard extends Component {
  render() {
    
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
      <ul>
        <li><Link to='/dashboard'>一营</Link></li>
        <li><Link to='/dashboard/erying'>二营</Link></li>
        <li><Link to='/dashboard/qibinglian'>骑兵连</Link></li>
      </ul>
      <Route path='/dashboard' exact component={Test}></Route>
      <Route path='/dashboard/erying' component={Erying}></Route>
      <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
    </div>
    )
    return 
  }
}

export default Dashboard
