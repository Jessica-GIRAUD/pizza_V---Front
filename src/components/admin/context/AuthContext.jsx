import { createContext, useEffect, useState } from "react";
import { getAllPublic } from "../../../services/Routes";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [resources, setResources] = useState([]);
  const [contact, setContact] = useState({});
  const [actus, setActus] = useState([]);

  const fetchAllRessources = () => {
    getAllPublic("pizzas").then((res) => {
      setResources(
        res.data
          .map(({ id, ...d }) => ({ ...d, key: id }))
          .sort((a, b) => a.name.localeCompare(b.name))
      );
    });
    getAllPublic("contact").then((res) => {
      setContact(res.data[0]);
    });
    getAllPublic("actus").then((res) => {
      setActus(res.data);
    });
  };

  function format(number) {
    var nonInt = /\D/g;
    var allNumbers = /.*(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/;
    var formatStyle = "0$1 $2 $3 $4 $5";
    return number?.replace(nonInt, "").replace(allNumbers, formatStyle);
  }

  useEffect(() => {
    fetchAllRessources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        resources,
        setResources,
        contact,
        actus,
        format,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
