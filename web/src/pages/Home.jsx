import React, { useContext } from "react";
import CreatePost from "../components/CreatePost";
import Bar from "../components/Bar";
import { GlobalContext } from "../context/context";
import axios from "axios";
import { baseURL } from "../core";
import { Link } from "react-router-dom";
import hamicon from "../images/hamicon.png";
import pic from "../images/pic.jpg";
import Categories from "../components/Categories";
import DoctorProfile from "../components/DoctorProfile";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

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
    <div>
      {state.isLogin === true && state.user.person === "doctor" ? (
        <div>
          <button
            onClick={logoutHandle}
            className="p-1 m-2 border-2 border-blue-400 text-blue-500 cursor-pointer"
          >
            Logout
          </button>

          <div className="w-full bg-purple-300 p-6 rounded-b-[50px]">
            <div className="flex justify-between ">
              <div className=" w-48 h-0">
                <img src={hamicon} alt="" />
              </div>
              <div className="w-14">
                <Link to={`/profile/${state.user._id}`}>
                  <img src={pic} alt="" className="rounded-full" />
                </Link>
              </div>
            </div>
            <p className="text-white text-lg mb-6">Welcome Back</p>
            <p className="text-white text-3xl md:text-6xl mb-8">
              Let's Find <br /> your top doctor!
            </p>
            <p className="text-6xl text-white">Doctor's Inn</p>
          </div>
          <Categories />
          <DoctorProfile />
          <div>{JSON.stringify(state)}</div>
        </div>
      ) : (
        <div>
          Doctor login
          <button
            onClick={logoutHandle}
            className="p-1 m-2 border-2 border-blue-400 text-blue-500 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
