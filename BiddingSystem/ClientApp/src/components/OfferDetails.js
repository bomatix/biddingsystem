import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const OfferDetails = (props) => {

    const [offer, setOffer] = useState();
    const [bids, setBids] = useState();
    const { offerId } = useParams();

    const fetchData = async () => {
        const response = await fetch('/api/offer/' + offerId);
        const data = await response.json();
        setOffer(data.offer);
        setBids(data.bids);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (offer == undefined) {
        return <div></div>
    }
    else {
        return (
            <div>
                <div className="d-flex justify-content-between flex-row p-2 border rounded m-2">
                    <div>
                        <h3>{offer.title}</h3>
                        <p>{offer.description}</p>
                    </div>
                    <div>
                        <div><b>{offer.price} EUR</b></div>
                    </div>
                </div>
                {bids.length > 0 && <div>
                    <h4>Bids</h4>
                    {bids.map(bid => <div>
                        hello
                    </div>)}
                </div>}
            </div>
        )
    }
}

export default OfferDetails;


