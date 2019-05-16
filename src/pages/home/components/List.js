import React, { Component } from 'react'
import {
  ListWrapper,
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  render() {
    return (
      <ListWrapper>
        <ListItem>
          <img className="pic" src="//upload-images.jianshu.io/upload_images/16021045-b04a481852fc9c28.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
          <ListInfo>
            <h3 className="title">微信聊天的三大禁忌，看看你有没有中招</h3>
            <p className="desc">
              微信已经成为我们社交不可或缺的工具，如果有人说他没有微信，你一定会怀疑他是不是地球人。但是，微信大家都会用，可是你真的会聊天吗？ 如果你经常使用...
    </p>
          </ListInfo>
        </ListItem>
        <ListItem>
          <img className="pic" src="//upload-images.jianshu.io/upload_images/16021045-b04a481852fc9c28.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
          <ListInfo>
            <h3 className="title">微信聊天的三大禁忌，看看你有没有中招</h3>
            <p className="desc">
              微信已经成为我们社交不可或缺的工具，如果有人说他没有微信，你一定会怀疑他是不是地球人。但是，微信大家都会用，可是你真的会聊天吗？ 如果你经常使用...
    </p>
          </ListInfo>
        </ListItem>
      </ListWrapper>
    )
  }
}

export default List