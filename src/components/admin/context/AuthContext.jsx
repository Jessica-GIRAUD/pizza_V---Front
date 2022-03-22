import { createContext, useEffect, useState } from "react";
import { getAllPizzas } from "../../../services/Routes";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [resources, setResources] = useState([]);

  const fetchPizza = () => {
    getAllPizzas().then((res) => {
      setResources(
        res.data
          .map(({ id, ...d }) => ({ ...d, key: id }))
          .sort((a, b) => a.name.localeCompare(b.name))
      );
    });
  };

  useEffect(() => {
    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        resources,
        setResources,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
