import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import House from  '../House/House.js';

class Dashboard extends Component {


    render(){
        return(
            <div className = "Dashboard">
            Dashboard
            <br/>
            <Link to={'/wizard'}><button> Add New Property </button></Link>
            <br/>
            <House />
            </div>
        )
    }
}
export default Dashboard;