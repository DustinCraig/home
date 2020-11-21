import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Landing } from './components/landing'
import About from './components/about'
import FriendsGivingServer from './components/friendsgiving/server'
import FriendsGivingPhone from './components/friendsgiving/phone'

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path="/server">
                    <FriendsGivingServer />
                </Route>
                <Route path="/phone">
                    <FriendsGivingPhone />
                </Route>
                <Route path="/">
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
