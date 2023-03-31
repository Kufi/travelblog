import React from "react"

function Entry(props) {
    
    console.log(props);
    
    return (
        <div className="entry">
            <img className="entry--cover--photo" src={`../images/${props.item.imageName}`} />
            <div className="entry--description">
                <div className="entry--location--container">
                    <img src="../images/pin.png" />
                    <h3>{props.item.location}</h3>
                    <a src={props.item.googleMapsURL}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
        </div>       
    )
}

export default Entry