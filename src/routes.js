import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from './component/Dashboard/Dashboard.js';
import Wizard from './component/Wizard/Wizard.js';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/wizard' component={Wizard}/>
        </Switch>
    </div>
)