import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeTokenLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  //  Toggle logic
  const isLoggedIn = !!token;

  // handling logout functionality
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ storeTokenLs, LogoutUser, isLoggedIn }}>
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
