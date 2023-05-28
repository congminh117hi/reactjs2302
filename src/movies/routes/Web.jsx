import {
    createBrowserRouter
} from "react-router-dom";

import HomePage from '../pages/Home'
import UpcomingPage from '../pages/Upcoming'
import SearchPage from '../pages/Search'
import NotfoundPage from '../pages/404'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <NotfoundPage/>
    },
    {
        path: "/upcoming",
        element: <UpcomingPage/>,
        errorElement: <NotfoundPage/>
    },
    {
        path: "/search",
        element: <SearchPage/>,
        errorElement: <NotfoundPage/>
    }
])
export default router;