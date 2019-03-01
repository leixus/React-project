import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handDeleteLi = this.handDeleteLi.bind(this);
    }

    render() {
        // React.createElement('div', {}, 'item')
        // JSX -> js对象 -> 真实的DOM
        return (
            <li key={this.props.index}
                onClick={this.handDeleteLi} dangerouslySetInnerHTML={{__html: this.props.test + " - " + this.props.content}}>
            </li>
        )
    }

    handDeleteLi() {
        const { handDeleteItem, index } = this.props;
        handDeleteItem(index);
    }
}

TodoItem.defaultProps = {
    test: 'Hello World'
};

TodoItem.propTypes = {
    test: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    index: PropTypes.number,
    handDeleteItem: PropTypes.func
};

export default TodoItem;
