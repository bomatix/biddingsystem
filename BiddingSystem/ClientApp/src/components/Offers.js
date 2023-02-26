﻿import React, { useEffect, useState } from 'react';
import Offer from './Offer';

const Offers = () => {

    const [offers, setOffers] = useState([]);

    const fetchOffers = async () => {
        const response = await fetch('api/offer');
        const data = await response.json();
        setOffers(data)
    }

    useEffect(() => {
        fetchOffers()
    }, []);


    return <div>
        {offers.map(offer => <Offer offer={ offer }/>)}
    </div>
}

export default Offers;
