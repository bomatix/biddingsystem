import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Bid from "./Bid";
import { useNavigate } from "react-router-dom";

const OfferDetails = (props) => {

    const [offer, setOffer] = useState();
    const [bids, setBids] = useState();
    const { offerId } = useParams();
    const navigate = useNavigate();

    const [selectedBidId, setSelectedBidId] = useState(undefined);
    const [password, setPassword] = useState("");

    const fetchData = async () => {
        const response = await fetch('/api/offer/' + offerId);
        const data = await response.json();
        console.log("bids: ", data.bids)
        setOffer(data.offer);
        setBids(data.bids);
        setSelectedBidId(data.offer.selectedBidId)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const closeOffer = async () => {
        console.log("selectedBidId: ", password)
        const result = await fetch("/api/offer/close", {
            method: "PUT",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: offerId,
                selectedBidId: selectedBidId,
                password: password
            })
        }).then((res) => {
            console.log("okk", res);
            if (res.status == 200) {
                window.location.reload();
            }
        })
    }

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
                        <div><b>{offer.price} EUR</b></div>
                        <div>{ offer.isOpen? "Open":"Closed"}</div>
                    </div>
                    <div className="d-flex flex-column">
                        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control danger mb-2" />
                        <button onClick={closeOffer} className="btn btn-danger mb-5">Close</button>
                        <button type="button" onClick={ () => navigate("/offer/"+offerId+"/create-bid") } className="btn btn-primary">Create a bid</button>
                    </div>
                </div>
                {bids.length > 0 && <div>
                    <h4 className="mt-5">Bids</h4>
                    {bids.map(bid => <Bid bid={bid} selected={selectedBidId == bid.id} selectBid={setSelectedBidId} />)}
                </div>}
            </div>
        )
    }
}

export default OfferDetails;


