import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class WizardTwo extends Component {
    
    constructor(){
        super();

        this.state={  
            imageIn: ""
        }
    }
    handleImageIn(e){
        // console.log("in name")
        this.setState({
            imageIn:e
        })
    }

    handleCancel(){
        this.setState({
            imageIn: ""
        })
    }

    render(){
        return(
            <div className = "WizardTwo">
                <h1>Add New Listing</h1>
                <br/>
                <h1> Image Url:</h1>
                <input onChange={(e)=>this.handleImageIn(e.target.value)} type="text" value={this.state.imageIn}/>
                <br/>
                <Link to={'/wizard/wOne'}><button>Previous Step</button></Link>
                <br/>
                <Link to={'/wizard/wThree'}><button>Next Step</button></Link>
                <br/>
            </div>
        )
    }
}
export default WizardTwo;