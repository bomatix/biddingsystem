import React, { useEffect, useState } from 'react';

const Bid = (props) => {

    const [password, setPassword] = useState("");

    const selectedClass = "btn btn-" + (!props.selected ? "outline-" : "") + "primary";


    const deleteBid = async () => {
        const result = await fetch("/api/bid", {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Password: password,
                Id: props.bid.id
            })
        }).then((res) => {
            console.log("okk", res);
            if (res.status == 200) {
                window.location.reload();
            }
        })
    }

    return (
        <div className="d-flex justify-content-between flex-row p-2 border rounded m-2">
            <div>
                <h3>{props.bid.buyerName}</h3>
                <p>{props.bid.amount}</p>
                <button onClick={() => props.selectBid(props.bid.id)} className={selectedClass}>{props.selected ? "Selected" : "Select bid"}</button>
            </div>
            <div>
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control danger mb-2" />
                <button onClick={ deleteBid } className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default Bid;


