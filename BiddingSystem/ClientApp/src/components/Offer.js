import React, { useEffect, useState } from 'react';

const Offer = (props) => {

    return (
        <div className="d-flex justify-content-between flex-row p-2 border rounded m-2">
            <div>
                <h3>{props.offer.title}</h3>
                <p>{props.offer.description}</p>
            </div>
            <div>
                <div><b>{props.offer.price} EUR</b></div>
                <button className="btn btn-primary">Details</button>
            </div>
        </div>
    )
}

export default Offer;

