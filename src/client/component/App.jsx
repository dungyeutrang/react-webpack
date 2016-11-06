import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'hello world 123'
        }
        this.updateState = this.updateState.bind(this);
        this.updateValueInput = this.updateState();
    }

    updateState() {
        this.setState({data: 'Data updated...'})
    }

    updateValueInput() {
        this.setState({

        })
    }

    render() {
        return (
            <div>
                <button onClick={this.updateState}> update state</button>
                <input type="text" value={this.state.data}/>
            </div>
        );
    }
}

export default App;