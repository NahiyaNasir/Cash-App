import { Children, createContext, useState } from "react";
import useAxiosCommon from "../../hooks/axiosCommon";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setaLoading] = useState(true);
  const axiosCommon = useAxiosCommon();

  

  const authInfo = {
    user,
    

    loading,
  };
  <div>
  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
</div>
};

export default AuthProvider;
