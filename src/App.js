import React, { Component } from 'react';
import TodoItem from './shares/TodoItem';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '学习React',
      list: ['leixu','我爱我家']
    };
    this.handChanageInput = this.handChanageInput.bind(this);
    this.handClickSubmit = this.handClickSubmit.bind(this);
    this.handDeleteLi = this.handDeleteLi.bind(this)
  }

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
          {/*{*/}
            {/*this.state.list.map((item, index) => {*/}
              {/*return <TodoItem key={index}*/}
                               {/*content={item}*/}
                               {/*index={index}*/}
                               {/*// handDeleteItem={this.handDeleteLi.bind(this)}*/}
                               {/*handDeleteItem={this.handDeleteLi}*/}

              {/*/>*/}
            {/*})*/}
          {/*}*/}
          {/*return <li key={index}*/}
                     {/*onClick={this.handDeleteLi.bind(this, index)}*/}
                     {/*dangerouslySetInnerHTML={{__html: res}}>*/}
          {/*</li>*/}
        </ul>
      </div>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem key={index}
                       content={item}
                       index={index}
          // handDeleteItem={this.handDeleteLi.bind(this)}
                       handDeleteItem={this.handDeleteLi}
      />
    })
  }

  handChanageInput(e) {
    // console.log(e.target.value);
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value;
    // 会出现异步问题
    this.setState(() => ({
      inputValue: value
    }))
  }

  handClickSubmit() {
    // console.log(this.state.inputValue);
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handDeleteLi(index) {
    // console.log(index);

    // this.setState({
    //   list: list
    // })
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }

}

export default App;
