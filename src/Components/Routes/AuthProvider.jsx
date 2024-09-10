import { createContext, useEffect, useState } from "react";
import useAxiosCommon from "../../hooks/axiosCommon";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosCommon = useAxiosCommon();

    const logOut=()=>{
      localStorage.removeItem('access-token')
      return true
    }
  useEffect(() => {
    const stateChange = async () => {
      try {
        const token = localStorage.getItem("access-token");
        // console.log(token);
        const resp = await axiosCommon.get(`/userInfo`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        // console.log(resp.data);
        setLoading(false);
        setUser(resp.data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    stateChange();
  }, [axiosCommon]);
  // console.log(user);

  const authInfo = {
    user,
    loading,
    logOut
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
