import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handDeleteLi = this.handDeleteLi.bind(this);
    }

    render() {
        return (
            <li key={this.props.index}
                onClick={this.handDeleteLi}>
                {this.props.content}
            </li>
        )
    }

    handDeleteLi() {
        // alert(1);
        // console.log(this.props.index);
        this.props.handDeleteItem(this.props.index);
    }

}

export default TodoItem;
