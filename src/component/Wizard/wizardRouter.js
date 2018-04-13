import React from 'react';
import {Route, Switch} from 'react-router-dom';

import WizardOne from '../WizardOne/WizardOne';
import WizardTwo from '../WizardTwo/WizardTwo';
import WizardThree from '../WizardThree/WizardThree';

export default(
    <Switch>
        <div>
            <Route component={WizardOne} path='/wizard/wOne' />
            <Route component={WizardTwo} path='/wizard/wTwo' />
            <Route component={WizardThree} path="/wizard/wThree" /> 
        </div>   
    </Switch>
)