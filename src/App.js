import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Landing } from './components/landing'
import About from './components/about'

function App() {
  return (
    <Fragment>
      <Landing />
    </Fragment>
  )
}

export default App
