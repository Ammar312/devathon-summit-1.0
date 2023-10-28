import React from "react";
import capsule from "../images/capsule.jpg";

const Categories = () => {
  return (
    <div>
      <div className="p-8">
        <p className="text-3xl font-semibold mb-10">Categories</p>
        <div className="flex flex-wrap gap-6 justify-evenly">
          <div>
            <div className="border rounded-xl">
              <div className="w-40">
                <img src={capsule} alt="" className="" />
              </div>
            </div>
            <p className="text-center text-slate-400">All</p>
          </div>
          <div>
            <div className="border rounded-xl">
              <div className="w-40">
                <img src={capsule} alt="" className="" />
              </div>
            </div>
            <p className="text-center text-slate-400">Cardiology</p>
          </div>
          <div>
            <div className="border rounded-xl">
              <div className="w-40">
                <img src={capsule} alt="" className="" />
              </div>
            </div>
            <p className="text-center text-slate-400">Medicine</p>
          </div>
          <div>
            <div className="border rounded-xl">
              <div className="w-40">
                <img src={capsule} alt="" className="" />
              </div>
            </div>
            <p className="text-center text-slate-400">General</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
