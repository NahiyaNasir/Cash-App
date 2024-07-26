import { createBrowserRouter } from "react-router-dom";




import Login from "../PAGES/Login";
import Register from "../PAGES/Register";
import Dashboard from "../PAGES/Dashboard";



const router = createBrowserRouter([

  {
    path: "/",
    element:   <Dashboard></Dashboard>,
    
  },
    {
      path: "/register",
      element:   <Register></Register>,
      
    },
    {
      path: "/login",
      element:   <Login></Login>,
      
    },
    


  ]);

  export default router