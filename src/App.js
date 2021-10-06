import React from "react"

class App extends React.Component {
    state = {
        isLoading: true
    }
    render() {
        const { isLoading } = this.state
        return (
            <div>
                { isLoading ? 'Loading...' : '영화 데이터 출력' }
            </div>
        )
    }
}

export default App