import React, {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  render() {
    const { item } = this.props
    return <div onClick={this.handleClick}>{item}</div>
  }
}

export default TodoItem