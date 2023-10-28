import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/context";
import authpic from "../images/auth.jpg";

const Login = () => {
  const inputRef = useRef(null);
  const baseURL = "http://localhost:3000/";
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GlobalContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = inputRef.current[0].value;
    const password = inputRef.current[1].value;
    console.log(email);
    console.log(password);
    try {
      const response = await axios.post(
        `${baseURL}api/v1/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      dispatch({
        type: "USER_LOGIN",
        payload: response.data.data,
      });
    } catch (error) {}
  };
  return (
    <div className="bg-blue-200 min-h-screen flex justify-center items-center">
      <div className=" bg-white px-8 pt-10 pb-6 w-[460px]">
        <div className=" w-[186px] h-[186px] rounded-full border-2 border-red-400 ">
          <img src={authpic} alt="authpic" />
        </div>
        <p className=" text-center font-semibold text-4xl mb-6 text-blue-600">
          Login
        </p>
        <div>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            ref={inputRef}
          >
            <div>
              <label htmlFor="" className="text-slate-400">
                Your Email:
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="p-2 border-2 w-[340px] rounded-xl "
              />
            </div>
            <div>
              <label htmlFor="" className="text-slate-400">
                Your Pasword:
              </label>
              <input
                type="password"
                placeholder="Password"
                className="p-2 border-2 w-[340px] rounded-xl "
              />
            </div>

            <button
              type="submit"
              className=" bg-blue-400 text-white p-2 text-lg hover:rounded-md transition-all mt-5 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
        <div className=" text-center my-4 text-blue-900">
          Don't Have Account? <Link to="/signup">Signup</Link>
        </div>
        <div>{JSON.stringify(state)}</div>
      </div>
    </div>
  );
};

export default Login;
