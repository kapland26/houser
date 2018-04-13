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
        Image: <img src={props.image} alt="house"/><br/>
        Monthly Mortgage: {props.mortgage}<br/>
        Rent: {props.rent}<br/>
        {console.log("Image url: "+props.image + " mort: "+ props.mortgage+" rent: "+props.rent)}
        <button onClick={()=> props.deleteHouse(props.id)}>Delete</button><br/>
        </div>
    )

}