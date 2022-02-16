import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Pages/Home/Home'

class Root extends Component {
    render() {
        return (
            <>
                <Route exact path='/' component={Home} />
                {/* <Switch>
                    <Route exact path='/board' component={Board} />
                    <Route path='/board/edit' component={BoardEdit} />
                    <Route path='/board/:id' component={Detail} />
                </Switch>
                <Route path='/mypage' component={Mypage} />
                <Route path='/signIn' component={SignIn} />
                <Route path='/join' component={Join} /> */}
            </>
        )
    }
}

export default Root
