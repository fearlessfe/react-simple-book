import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  const { inputValue, list, handleInputChange, handleBtnClick, deleteItem } = props
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
          value={inputValue} 
          placeholder="Basic usage" 
          style={{width: '300px', marginRight: '10px'}}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={handleBtnClick}>提交</Button>
      </div>
      <List
        style={{width: '300px', marginTop: '10px'}}
        bordered
        dataSource={list}
        renderItem={(item,index) => (<List.Item onClick={() => {deleteItem(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     const { inputValue, list, handleInputChange, handleBtnClick, deleteItem } = this.props
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <div>
//           <Input 
//             value={inputValue} 
//             placeholder="Basic usage" 
//             style={{width: '300px', marginRight: '10px'}}
//             onChange={handleInputChange}
//           />
//           <Button type="primary" onClick={handleBtnClick}>提交</Button>
//         </div>
//         <List
//           style={{width: '300px', marginTop: '10px'}}
//           bordered
//           dataSource={list}
//           renderItem={(item,index) => (<List.Item onClick={() => {deleteItem(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI