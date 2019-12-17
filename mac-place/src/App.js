import React from 'react';
import './App.css';

import Bit from './Bit.js'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let bits = [];
        for (let i = 0; i < 40; i++){
            for (let j = 0; j < 84; j++){
                bits.push(<Bit key={i + j} m={i} n={j} color={'black'}/>)
            }
        }

        return (
            <div className="App">
                {bits}
            </div>
        );
    }
}

export default App;
