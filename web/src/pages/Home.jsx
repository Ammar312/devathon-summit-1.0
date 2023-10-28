import React, { useContext } from "react";
import CreatePost from "../components/CreatePost";
import Bar from "../components/Bar";
import { GlobalContext } from "../context/context";
import axios from "axios";
import { baseURL } from "../core";
import { Link } from "react-router-dom";
import hamicon from "../images/hamicon.png";
import pic from "../images/pic.jpg";

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
      {state.isLogin === true && state.role === "user" ? (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to={`/profile/${state.user._id}`}>Profile</Link>
            </li>
          </ul>
        </nav>
      ) : null}

      <button
        onClick={logoutHandle}
        className="p-1 m-2 border-2 border-blue-400 text-blue-500 cursor-pointer"
      >
        Logout
      </button>

      <div className="w-full bg-purple-300 p-6 rounded-b-3xl">
        <div className="flex justify-between ">
          <div className=" w-48 h-0">
            <img src={hamicon} alt="" />
          </div>
          <div className="w-14">
            <img src={pic} alt="" className="rounded-2xl" />
          </div>
        </div>
        <p className="text-white text-lg">Welcome Back</p>
        <p className="text-white text-3xl md:text-6xl mb-8">
          Let's Find <br /> your top doctor!
        </p>
        <p className="text-6xl text-white">Doctor's Inn</p>
      </div>

      <div>{JSON.stringify(state)}</div>
    </div>
  );
};

export default Home;
