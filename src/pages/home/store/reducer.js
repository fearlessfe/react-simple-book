// import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  articleList: [{
    id: 1,
    title: '微信聊天的三大禁忌，看看你有没有中招',
    desc: '微信已经成为我们社交不可或缺的工具，如果有人说他没有微信，你一定会怀疑他是不是地球人。但是，微信大家都会用，可是你真的会聊天吗？ 如果你经常使用...'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}