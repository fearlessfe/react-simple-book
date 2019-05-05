import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  render() {
    const { inputValue, list } = this.state
    return <TodoListUI 
      inputValue={inputValue} 
      list={list}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      deleteItem={this.deleteItem}
      />
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }
}
export default TodoList;