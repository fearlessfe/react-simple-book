import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['学习React', '学习Angular']
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.getTodoItem = this.getTodoItem.bind(this)
  }

  handleChange(event) {
    const inputValue = event.target.value
    this.setState(() => (
      {
        inputValue
      }
    ))
  }

  submit() {
    this.setState((prevState) => 
      ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      })
    )
  }

  deleteItem(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }

  getTodoItem() {
    const { list } = this.state
    return list.map((item, index) => {
      return <TodoItem key={index} item={item} index={index} deleteItem={this.deleteItem.bind(this)} />
    })
  }

  render() {
    const { inputValue } = this.state
    return (
      <Fragment>
        <div>
          <input onChange={this.handleChange} value={inputValue} placeholder="请输入" />
          <button onClick={this.submit}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;