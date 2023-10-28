import React from "react";
import doctorimg from "../images/doctorimg.jpeg";
const DoctorProfile = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <div className="w-20 h-20">
            <img src={doctorimg} alt="" className="rounded-full" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DoctorProfile;
