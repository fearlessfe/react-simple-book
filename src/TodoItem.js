import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
    const { item, test } = this.props
    return <div onClick={this.handleClick}>{test}-{item}</div>
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
  test: 'Hello World'
}

export default TodoItem