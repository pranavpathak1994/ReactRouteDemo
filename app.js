import React from 'react'
import { render } from 'react-dom'
import App from './modules/mainTabs'
import About from './modules/about'
import Home from './modules/home'
import {HashRouter as Router, Route, hashHistory } from 'react-router-dom'




// render(<App/>, document.getElementById('app'))

render((<Router>
    <div>
        <Route path="/" component={App}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
    </div>
    
</Router>), document.getElementById('app'))