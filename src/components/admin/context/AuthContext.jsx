import { createContext, useEffect, useState } from "react";
import { getAllPizzas } from "../../../services/Pizzas";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [resources, setResources] = useState([]);

  const fetchPizza = () => {
    getAllPizzas().then((res) => {
      setResources(
        res.data
          .map(({ idpizza, ...d }) => ({ ...d, key: idpizza }))
          .sort((a, b) => a.name.localeCompare(b.name))
      );
    });
  };

  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, resources, setResources }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
