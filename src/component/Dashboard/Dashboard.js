import React, { Component } from 'react';

import House from  '../House/House.js';

class Dashboard extends Component {


    render(){
        return(
            <div className = "Dashboard">
            Dashboard
            <House />
            </div>
        )
    }
}
export default Dashboard;