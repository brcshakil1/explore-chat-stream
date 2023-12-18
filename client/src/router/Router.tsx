import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../pages/layout/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: 'login', element: <Login />
            },
            {
                path: 'signUp', element: <SignUp />
            }
        ]
    }
])

export default Router;