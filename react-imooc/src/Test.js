import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addGUN,removeGUN,addGunAsync} from './index.redux'

export class Test extends Component {
  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={ this.props.addGUN}>申请武器</button>
        <button onClick={ this.props.removeGUN}>上缴武器</button>
        <button onClick={ this.props.addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}
const mapStatetoProps = (state) => {
  return {
    num:state
  }
}
const actionCreators = {addGUN,removeGUN,addGunAsync}

Test = connect(mapStatetoProps,actionCreators)(Test)
export default Test
