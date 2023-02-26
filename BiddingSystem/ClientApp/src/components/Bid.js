import React, { useEffect, useState } from 'react';

const Bid = (props) => {

    return (
        <div className="d-flex justify-content-between flex-row p-2 border rounded m-2">
            <div>
                <h3>{props.bid.buyerName}</h3>
                <p>{props.bid.amount}</p>
            </div>
        </div>
    )
}

export default Bid;


