import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAll} from '../../ducks/reducer.js';
import wizroutes from './wizardRouter';

class Wizard extends Component {

    render(){

        return(
            <div className = "Wizard">
                <Link to={'/'}><button onClick={()=>this.props.clearAll()}> Cancel </button></Link>
                {wizroutes}
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

export default connect(mapStateToProps, {clearAll})(Wizard);
