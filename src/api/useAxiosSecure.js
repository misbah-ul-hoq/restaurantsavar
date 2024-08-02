import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8080",
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      // console.log("request stopped from interceptor");
      config.headers.authorization = localStorage.getItem("access-token");
      return config;
    },
    (error) => {
      return new Error(error);
    },
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      // response.push("this is custom response pushed from interceptor");
      response.custom = "custom property from interceptor in axios";
      console.log(response);
      return response;
    },
    (error) => {
      const status = error.response.status;
      console.log(status);
      if (status == 401 || status == 403) {
        logOut();
        navigate("/login");
      }
      return new Error(error);
    },
  );
  return { axiosSecure };
};

export default useAxiosSecure;
