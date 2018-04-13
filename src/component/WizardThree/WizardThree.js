import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class WizardThree extends Component {
    
    constructor(){
        super();

        this.state={  
            motgageIn: 0,
            rentIn: 0
        }
    }
    handleMortgageIn(e){
        // console.log("in name")
        this.setState({
            mortgageIn:e
        })
    }
    handleRentIn(e){
        // console.log("in name")
        this.setState({
            rentIn:e
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
                {/* <Link to={'/'}><button onClick={()=>this.handleAdd()}>Complete</button></Link> */}
                <Link to={'/wizard/wTwo'}><button>Next Step</button></Link><br/>
                <Link to={'/'}><button> Complete </button></Link>
            </div>
        )
    }
}
export default WizardThree;