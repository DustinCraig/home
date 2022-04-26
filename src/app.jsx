import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing } from './components/landing'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/'>
            <Fragment>
              <Landing />
            </Fragment>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
