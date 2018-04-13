import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImage} from '../../ducks/reducer.js';

class WizardTwo extends Component {

    render(){
        return(
            <div className = "WizardTwo">
                <h1>Add New Listing</h1>
                <br/>
                <h1> Image Url:</h1>
                <input onChange={(e)=>this.props.updateImage(e.target.value)}type="text" value={this.props.image}/>
                <br/>
                <Link to={'/wizard/wOne'}><button>Previous Step</button></Link>
                <br/>
                <Link to={'/wizard/wThree'}><button>Next Step</button></Link>
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
      image: state.image
    }
}
export default connect(mapStateToProps, {updateImage})(WizardTwo);