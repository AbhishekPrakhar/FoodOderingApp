import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/contexts/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/stores/appStore";

const App = () => {

    const [user, setUser] = useState('dafault User')

    return (
        <Provider store = {appStore}>            
            <UserContext.Provider value={{user, setUser}}>
                <Header />
            </UserContext.Provider>
            <Outlet />
            <Footer />
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router = {appRouter} />
)

