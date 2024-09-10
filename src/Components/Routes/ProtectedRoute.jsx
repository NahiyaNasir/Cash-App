import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
     
     const {user,loading}=useContext(AuthContext)
     if(loading)
        return <p>Loado..</p>
    if (user) 
        return  children
    return  <Navigate to='/login'></Navigate>
}
export default ProtectedRoute;