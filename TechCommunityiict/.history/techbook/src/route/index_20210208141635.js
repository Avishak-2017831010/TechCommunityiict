import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Login from './Login'

export default function Routes(){
    return(
        <Switchtch>
            <Route path="/" component={Login}
        </Switch>
    )
}