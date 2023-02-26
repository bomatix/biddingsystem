import React, { useEffect, useState } from 'react';

const CreateOffer = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [password, setPassowrd] = useState("");

    const createOffer = async () => {
        const result = await fetch("/api/offer", {
            method: "POST",
            mode: "cors",
            datacache: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Title: title,
                Description: description,
                Price: price,
                Password: password
            })
        }).then(() => {
            window.location.href = "/offers";
        })
    }

    return (
        <div>
            <div className="m-3">
                <h6>Title</h6>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
            </div>
            <div className="m-3">
                <h6>Description</h6>
                <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
            </div>
            <div className="m-3">
                <h6>Price</h6>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
            </div>
            <div className="m-3">
                <h6>Password</h6>
                <input type="text" value={password} onChange={(e) => setPassowrd(e.target.value)} className="form-control" />
            </div>
            <div className="m-3">
                <button onClick={createOffer} className="btn btn-primary">Create offer</button>
            </div>
        </div>
    )
}

export default CreateOffer;
