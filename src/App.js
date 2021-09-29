import {Component} from 'react'

class App extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <h1>The number is: {this.state.count} </h1>
        )
    }
}

export default App