import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        const { handDeleteItem, index } = this.props;
        handDeleteItem(index);
    }
}

TodoItem.prototypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    handDeleteItem: PropTypes.func

};

export default TodoItem;
