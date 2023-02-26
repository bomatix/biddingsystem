import CreateOffer from "./components/CreateOffer";
import { Home } from "./components/Home";
import Offers from "./components/Offers";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
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
