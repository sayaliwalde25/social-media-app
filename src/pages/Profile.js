import React from "react";

import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import Rightbar from "../Components/Rightbar";
import Feed from "../Components/Feed";

import "../all css/Profile.css"

import img from "../Images/profile.jpg"
import img1 from "../Images/girl4.jpg"
function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src={img} alt=""/>
            <img className="profileUserImg" src={img1} alt=""/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>


            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
 