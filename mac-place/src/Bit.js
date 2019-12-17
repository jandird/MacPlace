import React from 'react';

import './resources/css/bit.css'

class Bit extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            m: this.props.m,
            n: this.props.n,
            background: this.props.color,

            style: {
                background: this.props.color,
                top: this.props.m*20 + 'px',
                left: this.props.n*20 + 'px'
            }
        };

        this.clicked = this.clicked.bind(this);
    }

    render() {
        return (
            <div className="bit" style={this.state.style} onClick={this.clicked}/>
        );
    }

    clicked() {
        this.setState({
            style: {
                background: 'white',
                top: this.state.m*20 + 'px',
                left: this.state.n*20 + 'px'
            }
        })
    }
}

export default Bit;