import React, { Component } from 'react'
import {Grid,List} from 'antd-mobile'

export class AvatarSelector extends Component {
  constructor(props) {
     super(props);
     this.state={}
  }
  render() {
    const avatarList = 'avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8'.split(',').map(v =>({
      icon:require(`../img/${v}.png`),text:v,
    }))
    const gridHeader = this.state.text? (<div><span>已选择头像</span><img style={{width:20}} src={this.state.icon} alt=""/></div>) :
                                          '请选择头像'
    return (
      <div>
        {gridHeader}
        <List renderHeader={() => gridHeader}>
          <Grid data={avatarList} onClick={elm => {
            this.setState(elm)
            this.props.selectAvatar(elm.text)
          }} ></Grid>
        </List>
      </div>
    )
  }
}

export default AvatarSelector
