import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handDeleteLi = this.handDeleteLi.bind(this);
    }

    render() {
        // const content = this.props;
        return (
            <li key={this.props.index}
                onClick={this.handDeleteLi}>
                {this.props.content}
                {/*{content}*/}
            </li>
        )
    }

    handDeleteLi() {
        // alert(1);
        // console.log(this.props.index);
        const { handDeleteItem, index } = this.props;
        handDeleteItem(index);
    }
}

export default TodoItem;
