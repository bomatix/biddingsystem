import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Bid from "./Bid";
import { useNavigate } from "react-router-dom";

const OfferDetails = (props) => {

    const [offer, setOffer] = useState();
    const [bids, setBids] = useState();
    const { offerId } = useParams();
    const navigate = useNavigate();

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
                        <button type="button" onClick={ () => navigate("/offer/"+offerId+"/create-bid") }class="btn btn-primary">Create a bid</button>
                    </div>
                </div>
                {bids.length > 0 && <div>
                    <h4 className="mt-5">Bids</h4>
                    {bids.map(bid => <Bid bid={bid} />)}
                </div>}
            </div>
        )
    }
}

export default OfferDetails;


