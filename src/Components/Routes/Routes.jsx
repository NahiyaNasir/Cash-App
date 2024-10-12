import { createBrowserRouter } from "react-router-dom";







import Register from "../PAGES/Shared/Register";
import Login from "../PAGES/Shared/Login";
import Dashboard from "../PAGES/Shared/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import ManagementUser from "../PAGES/Admin/ManagementUser";
import Overview from "../PAGES/Shared/Overview";




const router = createBrowserRouter([

  {
    path: "/register",
    element:   <Register></Register>,
    
  },
  {
    path: "/login",
    element:   <Login></Login>,
    
  },
  

  {
    path: "/",
    element:   <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
    children:[

  {
    index: true,
    element: (
        <ProtectedRoute>
            <Overview />
        </ProtectedRoute>
    ),
},
  //  admin
      {
        path: "/userManagement",
        element:<ManagementUser></ManagementUser> ,
      }
    ]
  },



  ]);

  export default router