import CreateBid from "./components/CreateBid";
import CreateOffer from "./components/CreateOffer";
import OfferDetails from "./components/OfferDetails";
import Offers from "./components/Offers";

const AppRoutes = [
    {
        path: '/offers',
        element: <Offers/>
    },
    {
        path: '/create-offer',
        element: <CreateOffer/>
    },
    {
        path: '/offer/:offerId',
        element: <OfferDetails/>
    },
    {
        path: '/offer/:offerId/create-bid',
        element: <CreateBid />
    }
];

export default AppRoutes;
