import React from 'react'

import {Link} from 'react-router-dom'

const App = () =>(
    <div>
        <h1>React Router Tutorial</h1>
          <ul role="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
          <div>Hello, Its Main Page!</div>
      </div>
      
)
export default App;