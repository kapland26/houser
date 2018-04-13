import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updateState, updateZipcode} from '../../ducks/reducer.js';

class WizardOne extends Component {
    
    constructor(){
        super();

        this.state={  
        }
    }

    render(){
        return(
            <div className = "WizardOne">
                <h1>Add New Listing</h1>
                <br/>
                <h1> Name:</h1>
                <input onChange={(e)=>this.props.updateName(e.target.value)} type="text" value={this.props.name}/>
                <h1> Address:</h1>
                <input onChange={(e)=>this.props.updateAddress(e.target.value)} type="text" value={this.props.address}/>
                <h1> City:</h1>
                <input onChange={(e)=>this.props.updateCity(e.target.value)} type="text" value={this.props.city}/>            
                <h1> State:</h1>
                <input onChange={(e)=>this.props.updateState(e.target.value)} type="text" value={this.props.state}/>           
                <h1> Zipcode:</h1>
                <input onChange={(e)=>this.props.updateZipcode(e.target.value)} type="text" value={this.props.zipcode}/>          
                <br/>
                <Link to={'/wizard/wTwo'}><button>Next Step</button></Link>
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
      name: state.name,
      address: state.address,
      city: state.city,
      state: state.state,
      zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZipcode})(WizardOne);