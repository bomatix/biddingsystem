import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Offer = (props) => {

    const navigate = useNavigate();

    const showOfferDetails = () => {
        navigate("/offer/" + props.offer.id, {id: props.offer.id});
    }

    return (
        <div className="d-flex justify-content-between flex-row p-2 border rounded m-2">
            <div>
                <h3>{props.offer.title}</h3>
                <p>{props.offer.description}</p>
            </div>
            <div>
                <div><b>{props.offer.price} EUR</b></div>
                <button onClick={showOfferDetails} className="btn btn-primary">Details</button>
            </div>
        </div>
    )
}

export default Offer;

