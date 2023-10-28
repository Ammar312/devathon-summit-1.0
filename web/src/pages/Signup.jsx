import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authpic from "../images/auth.jpg";

const Signup = () => {
  const inputRef = useRef(null);
  const [err, setErr] = useState("hidden");
  const baseURL = "http://localhost:3000/";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = inputRef.current[0].value;
    const email = inputRef.current[1].value;
    const password = inputRef.current[2].value;
    const person = inputRef.current[3].checked
      ? inputRef.current[3].value
      : inputRef.current[4].value;
    console.log(inputRef);
    console.log(fullName);
    console.log(person);
    // if (repeatPassword !== password) {
    //   setErr("");
    //   return;
    // } else {
    //   setErr("hidden");
    // }
    try {
      const response = await axios.post(`${baseURL}api/v1/signup`, {
        fullName,
        email,
        password,
        person,
      });
      console.log(response);
      navigate("/login");
    } catch (error) {}
  };
  return (
    <div className="bg-black min-h-screen flex justify-center items-center pt-4">
      <div className=" bg-white px-8 pt-10 pb-6 w-[460px] flex flex-col items-center">
        <div className=" w-[186px] h-[186px] rounded-full border-2 border-red-400 ">
          <img src={authpic} alt="authpic" />
        </div>
        <p className=" text-center font-semibold text-4xl mb-6 text-black">
          Registration
        </p>
        <div>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            ref={inputRef}
          >
            <div>
              <label htmlFor="" className="text-slate-400">
                Your Name:
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="p-2 border-2 w-[340px] rounded-xl "
              />
            </div>
            <div>
              <label htmlFor="" className="text-slate-400">
                Your Email:
              </label>
              <input
                type="email"
                placeholder="Email"
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
            <div>
              <input type="checkbox" name="patient" id="" value="patient" />
              <span className="mx-3 text-slate-500">Patient</span>
              <input type="checkbox" name="doctor" id="" value="doctor" />
              <span className="mx-3 text-slate-500">Doctor</span>
            </div>

            {/* <label
              htmlFor="file"
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={addAvatar} alt="addavatar" className="w-10" />
              <span className=" text-blue-800">Add Your Image</span>
            </label>
            <input type="file" name="" id="file" className="hidden" /> */}
            <button
              type="submit"
              className=" bg-blue-400 text-white p-2 text-lg hover:rounded-md transition-all mt-5 rounded-xl"
            >
              Create an account
            </button>
          </form>
        </div>
        <div className=" text-center my-4 text-blue-900">
          Already Have Account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
