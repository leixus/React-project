import React, { Component } from 'react';
import TodoItem from './shares/TodoItem';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '学习React',
      list: ['leixu','我爱我家']
    }
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="insertArea"></label>
          <input id="insertArea"
                 type="text"
                 value={this.state.inputValue}
                 onChange={this.handChanageInput.bind(this)} />
          <button onClick={this.handClickSubmit.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem key={index}
                               content={item}
                               index={index}
                               handDeleteItem={this.handDeleteLi.bind(this)} />
            })
          }
          {/*return <li key={index}*/}
                     {/*onClick={this.handDeleteLi.bind(this, index)}*/}
                     {/*dangerouslySetInnerHTML={{__html: res}}>*/}
          {/*</li>*/}
        </ul>
      </div>
    );
  }

  handChanageInput(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  handClickSubmit() {
    // console.log(this.state.inputValue);
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handDeleteLi(index) {
    // console.log(index);
    let list = [...this.state.list];

    list.splice(index, 1);

    this.setState({
      list: list
    })
  }

}

export default App;
