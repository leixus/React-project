import React, { Component } from 'react';
import TodoItem from './shares/TodoItem';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '学习React',
      list: [1111,'我爱我家']
    };
    this.handChanageInput = this.handChanageInput.bind(this);
    this.handClickSubmit = this.handClickSubmit.bind(this);
    this.handDeleteLi = this.handDeleteLi.bind(this)
  }

  // 当组件的stats或者props发生改变的时候，render函数就会重新执行
  render() {
    return (
      <div>
        <div>
          <label htmlFor="insertArea"></label>
          <input className='inputBorder'
                 id="insertArea"
                 type="text"
                 value={this.state.inputValue}
                 onChange={this.handChanageInput} />
          <button onClick={this.handClickSubmit}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </div>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem key={index}
                       content={item}
                       index={index}
                       handDeleteItem={this.handDeleteLi}
      />
    })
  }

  handChanageInput(e) {
    const value = e.target.value;
    // 会出现异步问题
    this.setState(() => ({
      inputValue: value
    }))
  }

  handClickSubmit() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handDeleteLi(index) {
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }

}

export default App;
