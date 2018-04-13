import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import House from  '../House/House.js';

class Dashboard extends Component {
    
    constructor(){
        super();

        this.state={  
            houses:[]
        }
        this.getHouses = this.getHouses.bind(this);
    }

    componentDidMount(){
        this.getHouses();
    }

    getHouses(){
    axios.get("/api/houses").then(
        (res)=> {
        this.setState({
            houses: res.data
        })
        }
    ).catch(function (error) {
        console.log(error);
    });
    }

    render(){
        var houseList = this.state.houses.map((val, i)=>{
            return(
                <div className="houseContainer" key={i}>
                    <House id={val.id} name={val.name} address={val.address} city={val.city} state={val.state} zipcode={val.zipcode} />
                </div>
            )
        })

        return(
            <div className = "Dashboard">
            Dashboard
            <br/>
            <Link to={'/wizard'}><button> Add New Property </button></Link>
            <br/><br/>
            House Listings:<br/><br/>
            {houseList}
            </div>
        )
    }
}
export default Dashboard;