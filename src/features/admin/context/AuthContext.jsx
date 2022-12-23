import { createContext, useEffect, useState } from "react";
import { getAllPublic, getOne } from "../../../services/Routes";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [pizzas, setPizzas] = useState([]);
  const [contact, setContact] = useState({});
  const [actus, setActus] = useState([]);
  const [profil, setProfil] = useState({ ...auth.user });
  const [isLoading, setIsLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getAllPizzas = () => {
    setIsLoading(true);
    getAllPublic("pizzas")
      .then((res) => {
        if (res?.data) {
          setPizzas(
            res?.data
              ?.map(({ id, ...d }) => ({ ...d, key: id }))
              ?.sort((a, b) => a?.name?.localeCompare(b?.name))
          );
        } else setPizzas([]);
      })
      .finally(() => setIsLoading(false));
  };

  const getContact = () => {
    setIsLoading(true);
    getAllPublic("contact")
      .then((res) => {
        if (res?.data) {
          setContact(res.data);
          setFileList([
            {
              url: res.data.logo,
              id: res.data.id,
              name: "Visualisez votre logo actuel",
              status: "done",
            },
          ]);
        } else {
          setContact({});
        }
      })
      .finally(() => setIsLoading(false));
  };

  const getAllActus = () => {
    setIsLoading(true);
    getAllPublic("actus")
      .then((res) => {
        if (res?.data) {
          setActus(res?.data?.map(({ id, ...d }) => ({ ...d, key: id })));
        } else setActus([]);
      })
      .finally(() => setIsLoading(false));
  };

  const getProfil = () => {
    setIsLoading(true);
    getOne(auth?.user?.id, axiosPrivate, "profile")
      .then((res) => {
        if (res?.data) {
          setProfil(res.data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const fetchResources = (topic) => {
    switch (topic) {
      case "pizzas":
        getAllPizzas();
        break;
      case "contact":
        getContact();
        break;
      case "profil":
        getProfil();
        break;
      case "actus":
        getAllActus();
        break;
      default:
        getAllPizzas();
        getContact();
        getAllActus();
        break;
    }
  };

  function format(number) {
    var nonInt = /\D/g;
    var allNumbers = /.*(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/;
    var formatStyle = "0$1 $2 $3 $4 $5";
    return number?.replace(nonInt, "").replace(allNumbers, formatStyle);
  }

  useEffect(() => {
    fetchResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        pizzas,
        setPizzas,
        profil,
        setProfil,
        contact,
        actus,
        format,
        isLoading,
        fileList,
        setFileList,
        fetchResources,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
