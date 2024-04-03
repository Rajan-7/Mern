import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const URL = "http://localhost:5007/api/auth/user";
const USL = "http://localhost:5007/api/data/service";

// Provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;
  console.log(authorizationToken);

  const storeTokenLs = (serverToken) => {
    setToken(serverToken);
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
          Authorization: authorizationToken,
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

  // fetching the service data for the database
  const getServices = async () => {
    try {
      const response = await fetch(USL);
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`From service frontend: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenLs,
        LogoutUser,
        isLoggedIn,
        user,
        services,
        authorizationToken,
      }}
    >
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
