import React, { Component } from 'react';
import '../css/cssAnimate.css'
import { CSSTransition } from "react-transition-group"

class CssAnimate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                {/*<h2 className={this.state.show ? 'show' : 'hide'}>显示</h2>*/}
                {/*<h2 className={this.state.show ? 'hide' : 'show'}>隐藏</h2>*/}
                <CSSTransition
                    in={this.state.show}
                    timeout={300}
                    classNames="message"
                    unmountOnExit>
                    <h2>显示</h2>
                </CSSTransition>
                <button onClick={this.handClickToggle.bind(this)}>切换</button>
            </div>
        )
    }

    handClickToggle() {
        // this.setState(() => ({
        //     show: this.state.show ? false : true
        // }))

        this.setState({
            show: this.state.show ? false : true
        }, () => {
            console.log(this.state.show);
        });
    }
}

export default CssAnimate;
