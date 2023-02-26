import CreateOffer from "./components/CreateOffer";
import Offers from "./components/Offers";

const AppRoutes = [
    {
        path: '/offers',
        element: <Offers />
    },
    {
        path: '/create-offer',
        element: <CreateOffer />
    }
];

export default AppRoutes;
