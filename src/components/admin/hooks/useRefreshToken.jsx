import Axios from "../../../services/Axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await Axios.get("/refresh", {
      withCredentials: true,
    });
    console.log("response", response);
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
        user: response.data.user,
        loggedIn: response.data.loggedIn,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
