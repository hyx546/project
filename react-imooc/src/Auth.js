import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from './Auth.redux';

// 有两个reducers， 每个reducers都有一个state
// 合并
// @connect(
//   state => state
// )

class Auth extends Component {
  render() {
    return (
      <div>
        <h2>Auth page</h2>
      </div>
    )
  }
}

export default Auth
