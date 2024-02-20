import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const URL = "http://localhost:5007/api/auth/user";

// Provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user,setUser] = useState("");

  const storeTokenLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  //  Toggle logic
  const isLoggedIn = !!token;

  // Handling logout functionality
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // JWT authentication -> Fetching data from the users
  const userAuthentication = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error occured Fetching user Data");
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ storeTokenLs, LogoutUser, isLoggedIn,user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Consumer
export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (!contextValue) {
    throw new Error("Auth is not properly managed in main.jsx");
  }
  return contextValue;
};
