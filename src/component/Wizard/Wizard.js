import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import wizroutes from './wizardRouter';

class Wizard extends Component {
    render(){

        return(
            <div className = "Wizard">
                <Link to={'/'}><button> Cancel </button></Link>
                {wizroutes}
            </div>
        )
    }
}

export default Wizard;
