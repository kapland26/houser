import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateMortgage, updateRent, clearAll} from '../../ducks/reducer.js';


class WizardThree extends Component {

    handleAdd(){
        let body={
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode,
            image: this.props.image,
            mortgage: this.props.mortgage,
            rent: this.props.rent
        }
        axios.post("/api/house",body).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                alert("Bad post!");
            });
            this.props.clearAll();
    }

    render(){
        return(
            <div className = "WizardTwo">
                <h1>Add New Listing</h1>
                <br/>
                <h1> Monthly Mortgage Amount:</h1>
                <input onChange={(e)=>this.props.updateMortgage(e.target.value)} type="text" value={this.props.mortgage}/>
                <br/>
                <h1> Desired Monthly Rent:</h1>
                <input onChange={(e)=>this.props.updateRent(e.target.value)} type="text" value={this.props.rent}/>
                <br/>
                <Link to={'/wizard/wTwo'}><button>Previous Step</button></Link><br/>
                <Link to={'/'}><button onClick={()=>this.handleAdd()}> Complete </button></Link>
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
      zipcode: state.zipcode,
      image: state.image,
      mortgage: state.mortgage,
      rent: state.rent
    }
}

export default connect(mapStateToProps, {updateMortgage, updateRent, clearAll})(WizardThree);
