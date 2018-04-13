import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class WizardOne extends Component {
    
    constructor(){
        super();

        this.state={  
            nameIn: "",     
            addressIn: "",
            cityIn: "",
            stateIn: "",
            zipcodeIn: ""
        }
    }
    handleNameIn(e){
        // console.log("in name")
        this.setState({
            nameIn:e
        })
    }
    handleAddressIn(e){
        // console.log("in addr")
        this.setState({
            addressIn:e
        })
    }
    handleCityIn(e){
        // console.log("in city")
        this.setState({
            cityIn:e
        })
    }
    handleStateIn(e){
        // console.log("in state")
        this.setState({
            stateIn:e
        })
    }
    handleZipcodeIn(e){
        // console.log("in zip")
        this.setState({
            zipcodeIn:e
        })
    }
    handleAdd(){
        let body={
           name: this.state.nameIn,
           address: this.state.addressIn,
           city: this.state.cityIn,
           state:this.state.stateIn,
           zipcode:this.state.zipcodeIn
        } 
        axios.post("/api/house",body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("Bad post!");
        });
        this.handleCancel();
    }

    render(){
        return(
            <div className = "WizardOne">
                <h1>Add New Listing</h1>
                <br/>
                <h1> Name:</h1>
                <input onChange={(e)=>this.handleNameIn(e.target.value)} type="text" value={this.state.nameIn}/>
                <h1> Address:</h1>
                <input onChange={(e)=>this.handleAddressIn(e.target.value)} type="text" value={this.state.addressIn}/>
                <h1> City:</h1>
                <input onChange={(e)=>this.handleCityIn(e.target.value)} type="text" value={this.state.cityIn}/>            
                <h1> State:</h1>
                <input onChange={(e)=>this.handleStateIn(e.target.value)} type="text" value={this.state.stateIn}/>           
                <h1> Zipcode:</h1>
                <input onChange={(e)=>this.handleZipcodeIn(e.target.value)} type="text" value={this.state.zipcodeIn}/>          
                <br/>
                <Link to={'/wizard/wTwo'}><button>Next Step</button></Link>
                <br/>
            </div>
        )
    }
}
export default WizardOne;