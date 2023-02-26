import React, { useEffect, useState } from 'react';
import Offer from './Offer';

const Offers = () => {

    const [offers, setOffers] = useState([]);

    const fetchOffers = async () => {
        const response = await fetch('api/offer');
        const data = await response.json();
        setOffers(data)
        console.log(data);
    }

    useEffect(() => {
        fetchOffers()
    }, []);


    return <div>
        {offers.length > 0 ? offers.map(offer => <Offer offer={offer} />) :
        "No open offers. Create one!"}
    </div>
}

export default Offers;
