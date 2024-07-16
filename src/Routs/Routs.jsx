import { createBrowserRouter } from "react-router-dom";



import Register from "../Components/Register";
import Login from "../Components/PAGES/Login";



const router = createBrowserRouter([
    {
      path: "/",
      element:   <Register></Register>,
      
    },
    {
      path: "/login",
      element:   <Login></Login>,
      
    },
    


  ]);

  export default router