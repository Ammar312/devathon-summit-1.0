import React, { useContext, useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import { GlobalContext } from "./context/context";
import { baseURL } from "./core";
import Profile from "./pages/Profile";
import { BounceLoader } from "react-spinners";
import DoctorPage from "./pages/DoctorPage";

const App = () => {
  const { state, dispatch } = useContext(GlobalContext);
  // const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.withCredentials = true;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  });

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${baseURL}api/v1/profile`, {
          withCredentials: true,
        });
        dispatch({
          type: "USER_LOGIN",
          payload: response.data.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "USER_LOGOUT",
        });
      }
    };
    checkLoginStatus();
  }, []);

  const logoutHandle = async () => {
    try {
      const response = await axios.post(
        `${baseURL}api/v1/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch({
        type: "USER_LOGOUT",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BrowserRouter>
      {state.isLogin === true && state.user.person === "patient" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path={`profile/:userId`} element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : null}
      {state.isLogin === true && state.user.person === "doctor" ? (
        <Routes>
          <Route path="/" element={<DoctorPage />} />
          {/* <div>
            Doctor login
            <button
              onClick={logoutHandle}
              className="p-1 m-2 border-2 border-blue-400 text-blue-500 cursor-pointer"
            >
              Logout
            </button>
            <div>{JSON.stringify(state)}</div>
          </div> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path={`profile/:userId`} element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : null}
      {state.isLogin === false ? (
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path={`profile/:userId`} element={<Profile />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      ) : null}

      {state.isLogin === null ? (
        <div>
          <BounceLoader color="#36d7b7" />
        </div>
      ) : null}
    </BrowserRouter>
  );
};

export default App;
