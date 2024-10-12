import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./axiosCommon";
import { useContext } from "react";
import { AuthContext } from "../Components/Routes/AuthProvider";

  
  const useRole = ()=>{
    const {user,loading}=useContext(AuthContext)
    // console.log(user?.email);
    const axiosCommon=useAxiosCommon()
    const {data:role,isLoading}=useQuery({
        queryKey:['role',user?.email],
        enabled: !loading && !!user?.email,
        queryFn:async()=>{
            const res=await axiosCommon.get(`/role/${user.email}`)
            // console.log(res.data.role )
            if (res?.data.role) {
              return res?.data.role
              ;
            } else {
              console.log("Role is undefined in response", res.data.role
              );
              return undefined; 
           
        }
      }
    })
    return[ role,isLoading]
  }
  
  export default useRole;