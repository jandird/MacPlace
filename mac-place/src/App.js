import React from 'react';
import './App.css';

import Bit from './Bit.js'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.createMap = this.createMap.bind(this);
    }

    render() {
        let bits = [];
        for (let i = 0; i < 40; i++){
            for (let j = 0; j < 84; j++){
                let bitStyle = {
                    background: 'black',
                    top: i*20 + 'px',
                    left: j*20 + 'px'
                };
                bits.push(<Bit key={i + j} style={bitStyle}/>)
            }
        }

        return (
            <div className="App">
                {bits}
            </div>
        );
    }

    createMap() {
        let bits = [];
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                let bitStyle = {
                    background: 'black',
                    top: i*20 + 'px',
                    left: j*20 + 'px'
                };
                bits.push(<Bit style={bitStyle}/>)
            }
        }
        return <tbody>{bits}</tbody>;
    }
}

export default App;
