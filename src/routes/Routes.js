import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../components/AddStudent/AddStudent";
import LogIn from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import AllStudents from "../components/ManageStudents/AllStudents";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AddStudent></AddStudent>
            },
            {
                path: '/allStudents',
                element: <AllStudents></AllStudents>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/registration',
                element: <Register></Register>
            }
        ]
    }
])