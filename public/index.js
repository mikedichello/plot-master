// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from '/components/App/App.js'
// import {BrowserRouter as Router} from 'react-router-dom'

class Router extends Component {
    render() {
        return(
            <div>
                <App />
            </div>
        )
    }
}

ReactDOM.render(<Router />, document.getElementById('root'));