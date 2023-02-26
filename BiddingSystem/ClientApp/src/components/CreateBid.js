import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreateBid = (props) => {

    const navigate = useNavigate();
    const { offerId } = useParams();

    const [buyerName, setBuyerName] = useState("");
    const [amount, setAmount] = useState("");
    const [password, setPassowrd] = useState("");

    const showOfferDetails = () => {
        navigate("/offer/" + props.offer.id);
    }

    const createBid = async () => {
        const result = await fetch("/api/bid", {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                BuyerName: buyerName,
                Amount: amount,
                Password: password,
                OfferId: offerId
            })
        }).then(() => {
            window.location.href = "/offer/"+offerId;
        })
    }

    return (
        <div>
            <div className="m-3">
                <h6>Name</h6>
                <input type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} className="form-control" />
            </div>
            <div className="m-3">
                <h6>Amount</h6>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" />
            </div>
            <div className="m-3">
                <h6>Password</h6>
                <input type="text" value={password} onChange={(e) => setPassowrd(e.target.value)} className="form-control" />
            </div>
            <div className="m-3">
                <button onClick={createBid} className="btn btn-primary">Create bid</button>
            </div>
        </div>
    )
}

export default CreateBid;


