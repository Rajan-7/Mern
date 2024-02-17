import { createContext, useContext } from "react";

export const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  const storeTokenLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={{ storeTokenLs }}>
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
