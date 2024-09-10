import { createBrowserRouter } from "react-router-dom";







import Register from "../PAGES/Shared/Register";
import Login from "../PAGES/Shared/Login";
import Dashboard from "../PAGES/Shared/Dashboard";
import ProtectedRoute from "./ProtectedRoute";



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
    
  },
  


  ]);

  export default router