import React from 'react';

export default function House( props ) {

    return(
        <div className="House">
        House:<br/>
        Property Name: {props.name}<br/>
        Address: {props.address}<br/>
        City: {props.city}<br/>
        State: {props.state}<br/>
        Zip: {props.zipcode}<br/>
        <button>Delete</button><br/>
        </div>
    )

}