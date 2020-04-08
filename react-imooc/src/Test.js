import React, { Component } from 'react'

export class Test extends Component {
  render() {
    const store = this.props.store
    const addGUN  =this.props.addGUN
    const removeGUN  =this.props.removeGUN
    const addGunAsync = this.props.addGunAsync
    const num = store.getState()
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={() => store.dispatch(addGUN())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGUN())}>上缴武器</button>
        <button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</button>
      </div>
    )
  }
}

export default Test
