import React from 'react';
import './App.css';

import Bit from './Bit.js'
import Fire from './config.js'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bits: []
        };

        this.updateBits = this.updateBits.bind(this);
    }

    componentDidMount() {
        this.updateBits();
        // for (let i = 0; i <= 39; i++){
        //     for (let j = 0; j <= 83; j++){
        //         Fire.database().ref("macplace").push({m: i, n: j, color: "#000000"})
        //     }
        // }
    }

    render() {
        return (
            <div className="App">
                {this.state.bits}
            </div>
        );
    }

    updateBits(){
        let bits = [];

        let rows;
        let messagesRef = Fire.database().ref('macplace').orderByKey();
        messagesRef.on('value', snapshot => {
            rows = snapshot.val();
            for (let bit in rows){
                if (rows.hasOwnProperty(bit)){
                    let obj = rows[bit];
                    bits.push(<Bit key={bit} m={obj.m} n={obj.n} color={obj.color}/>);
                }
            }

            this.setState({bits: bits});
        });
    }
}

export default App;
