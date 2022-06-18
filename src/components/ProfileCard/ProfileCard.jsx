import React from "react";
import Profile from "../../img/profileImg.jpg";
import Cover from "../../img/cover.jpg";
import "./ProfileCard.css";
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="profile" />
        <img src={Profile} alt="profile" />
      </div>
      <div className="ProfileName">
        <span>John</span>
        <span>Senior FullStack Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>2,332</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>2,332</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>
      <span>MyProfile</span>
    </div>
  );
};

export default ProfileCard;
