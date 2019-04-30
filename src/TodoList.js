import React, { Component, Fragment } from 'react'

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
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  submit() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  deleteItem(index) {
    console.log(index)
    let list = [...this.state.list].splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    const { list, inputValue } = this.state
    return (
      <Fragment>
        <div>
          <input onChange={this.handleChange} value={inputValue} placeholder="请输入" />
          <button onClick={this.submit}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={() => this.deleteItem(index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;